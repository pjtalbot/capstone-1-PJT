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
      SELECT b.id AS board_id, b.user_id, g.giphy_id  
      FROM boards AS b
      LEFT JOIN boards_gifs AS bg 
      ON b.id = bg.board_id
      LEFT JOIN gifs AS g
      ON  bg.gif_id = g.id
      LEFT JOIN users as u
      ON b.user_id = u.id
      WHERE u.id = $1`, [req.params.id])
    if (results.rows.length === 0) {
      throw new ExpressError(`Message not found with id ${req.params.id}`, 404)
    }
    const data = results.rows[0];
    
    return res.send(data)
  } catch (e) {
    return next(e)
  }
})







module.exports = router;