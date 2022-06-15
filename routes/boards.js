const db = require("../db");
const express = require("express");
const router = express.Router();
const ExpressError = require("../expressError");
const Board = require('../models/board')

router.get('/', async (req, res, next) => {
    try {
        const boards = await Board.getAll()
        return res.json({boards: boards})
    }
        catch (e) {
            return next(e)
        }
})

router.get('/:id', async (req, res, next) => {
  try {
    const board = await Board.getById(req.params.id)
    
    // const data = results.rows[0];
    
    return res.json(board)
    } catch(e) {
        next(e)
    }
    
  
})

router.post('/', async (req, res, next) => {
    try {
        const { name, user_id } = req.body;
        const newBoard = await Board.create(name, user_id)

        return res.json(newBoard)

    } catch (e) {
        return next(e)

    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Board.delete(req.params.id)

        return res.json({msg: "Deleted"})

    } catch (e) {
        return next(e)

    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        let newName = req.body.name
        console.log(req.body)
        const board = await Board.update(req.params.id, newName)
        return res.json(board)

    } catch(e) {
        next(e)
    }
})



module.exports = router;