process.env.NODE_ENV = 'test'
// sets node environment to testing
const Item = require('../item')

const request = require('supertest')




const app = require('../app')
let items = require('../fakeDb')

beforeEach(function() {
    let oreos = new Item('oreos', 4.00)
    // jest
})

afterEach(function() {
    items.length = 0;
})

describe