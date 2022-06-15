process.env.NODE_ENV = 'test'
// sets node environment to testing
const User = require('../models/user')

const request = require('supertest')




const app = require('../app')


beforeEach(function() {
    let newUser = new User('oreos', 4.00)
    // jest

})

afterEach(function() {
    items.length = 0;
})

describe