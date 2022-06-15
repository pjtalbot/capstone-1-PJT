process.env.NODE_ENV = 'test'
// sets node environment to testing
const db = require('../db')
const User = require('./user')


const request = require('supertest')




const app = require('../app')
const { Test } = require('supertest')


beforeEach(async function() {
    
    let newUser = await User.create('happyboy2', "happyboy2@gmail.com", '12345')


})

afterEach(async function() {
    const drop = await db.query(`
    DROP TABLE users`)
    
    await db.query(`CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username text NOT NULL,
        email text NOT NULL,
        password text NOT NULL,
        date_created timestamp   NOT NULL,
        date_last_edited timestamp   NOT NULL    
    )`)

})

test("get user by ID", async () => {
    const res = await db.query('SELECT * FROM users')
    expect(res.rows.length).toEqual(1);
    console.log(res)
    expect(res.rows[0].id).toBe(1)
})