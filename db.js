/** Database setup for users. */

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///signs_test";
} else {
    // CHANGE TO ///signs after set up
  DB_URI = "postgresql:///signs";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;