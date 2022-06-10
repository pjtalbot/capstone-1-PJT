const db = require("../db");
const express = require("express");
const router = express.Router();
const ExpressError = require("../expressError");

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query(`
        SELECT * FROM Users
        `)
        return res.json(results.rows)
    }
        catch (e) {
            return next(e)
        }
})

router.get('/:id', async (req, res, next) => {
  try {
    const results = await db.query(`
    SELECT u.id AS user_id, u.username, u.email, b.id AS board_id  
    FROM users AS u
    LEFT JOIN boards AS b
    ON  u.id = b.user_id
    WHERE u.id = $1`, [req.params.id])
    if (results.rows.length === 0) {
      throw new ExpressError(`Message not found with id ${req.params.id}`, 404)
    }
    
    const data = results.rows;
    if (results.rows.length === 0) {
        throw new ExpressError(`User Id not found with id: ${req.params.id}`, 404)
    }
    const { user_id, username, email, x} = results.rows[0]
    
    const boards = results.rows.map(r => r.board_id)

    
    return res.send({ user_id, username, email, boards})

    // 
  } catch (e) {
    return next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
    try {
    const userSelect = await db.query('SELECT id FROM users WHERE id = $1', [req.params.id])
    if (userSelect.rows.length === 0) {
        throw new ExpressError(`User not found with ID: ${req.params.id}`)
    }
      const results = await db.query(`
      UPDATE users SET username = $2, email = $3
      WHERE id = $1
      RETURNING id, username, email`,
      [req.params.id, req.body.username, req.body.email])
    return res.json(results.rows[0]) }
 catch(e) {
     return next(e)
 }

})








module.exports = router;