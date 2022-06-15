process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../../app");
const db = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

// use small value here so tests are fast
const BCRYPT_WORK_FACTOR = 1;

let testUserToken;
let testAdminToken;

beforeEach(async function () {
    const hashedPassword = await bcrypt.hash(
      "secret", BCRYPT_WORK_FACTOR);
    await db.query(`INSERT INTO users VALUES ('test', $1)`,
      [hashedPassword]);
    await db.query(`INSERT INTO users VALUES ('admin', $1)`,
      [hashedPassword]);
  
    // we'll need tokens for future requests
    const testUser = { username: "test" };
    const testAdmin = { username: "admin" };
    testUserToken = jwt.sign(testUser, SECRET_KEY);
    testAdminToken = jwt.sign(testAdmin, SECRET_KEY);
  });