const db = require('../db')
const ExpressError = require('../expressError')

// OO approach 1

class Board {
    static async getAll() {
        let results = await db.query("SELECT * FROM boards")
        return results.rows
    }
    static async getById(id) {
        
            const results = await db.query(`SELECT * FROM boards WHERE id = $1`, [id])
            if (results.rows.length === 0) {
                throw new ExpressError("Board Not Found", 404)
            }
            console.log(results)
            return results.rows[0]
    }
    static async create(name, user_id) {
        // format js Date into SQL date. Write own helper function or import later
        // https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
        if(!name || !user_id) {
            throw new ExpressError("missing data!", 400)
        }
        let rightNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const result = await db.query(`INSERT INTO boards (name, user_id, date_created, date_last_edited) 
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, user_id, date_created, date_last_edited`, [name, user_id, rightNow, rightNow])
        return result.rows[0]

    }
    static async delete(id) {
        const result = await db.query(`
        DELETE FROM boards
        WHERE id = $1
        RETURNING id`, [id])

        if (result.rows.length === 0) {
            throw new ExpressError("Board not found", 404)
        
        }
    }

    

    static async update(id, newName) {
        let rightNow = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const results = await db.query(`
        UPDATE boards SET name = $2, date_last_edited = $3
        WHERE id = $1
        RETURNING id, name, date_last_edited`, [id, newName, rightNow])

        return results.rows[0]
    }
    
}

module.exports = Board