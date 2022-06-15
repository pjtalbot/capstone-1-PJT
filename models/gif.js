const db = require('../db')

// explore event loop
class Gif {
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

}

// id SERIAL PRIMARY KEY,
//     name text NOT NULL,
//     description text,
//     giphy_id text NOT NULL

module.exports = Gif