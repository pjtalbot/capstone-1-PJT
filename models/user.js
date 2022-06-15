const db = require('../db')
const ExpressError = require('../expressError')

// explore event loop
class User {
    constructor(id, name, description, giphy_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.giphy_id = giphy_id

    }
    static async getAll() {
        const results = await db.query(`SELECT * FROM gifs`)
        console.log(results)
        const gifs = results.rows.map(r => new Gif(r.id, r.name, r.description, r.giphy_id))
        console.log(gifs)
        return gifs
    }

    static async create(username, email, password) {
        // format js Date into SQL date. Write own helper function or import later
        // https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
        if(!username || !email || !password) {
            throw new ExpressError("missing data!", 400)
        }
        let rightNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const result = await db.query(`INSERT INTO users (username, email, password, date_created, date_last_edited) 
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, username, password, email, date_created, date_last_edited`, [username, email, password, rightNow, rightNow])
        return result.rows[0]

    }

}

module.exports = User

// const users = require("./db")

// // id SERIAL PRIMARY KEY,
// //     username text NOT NULL,
// //     email text NOT NULL,
// //     password text NOT NULL,
// //     date_created timestamp   NOT NULL,
// //     date_last_edited timestamp   NOT NULL

// class User {
//     constructor(username, email, password, date_created, date_last_edited) {
//         this.username = username;
//         this.email = email;


//         items.push(this)
//     }

//     static all() {
//         return items

//     }

//     static find(name) {
//         let item = items.find(i => i.name === name);

//         return item

//     }

//     static update(name, data) {
//         let item = Item.find(name);

//         item.name = data.name;
//         item.price = data.price

//         return item;

//     }

//     static remove(name) {
//         let item = Item.find(name);

//         let index = items.findIndex(ITEM => ITEM.name === name)
//         if (index === -1) {
//             throw {message: 'Nope', status: 404}
//         }

//         items.splice(index, 1)




//     }

    

// }

// module.exports = Item