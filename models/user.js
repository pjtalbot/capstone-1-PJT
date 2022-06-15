const db = require('../db')

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