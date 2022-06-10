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