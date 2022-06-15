const db = require("../db");
const express = require("express");
const router = express.Router();
const ExpressError = require("../expressError");
const Gif = require('../models/gif')

router.get('/', async (req, res, next) => {
    try {
        const gifs = await Gif.getAll()
        return res.json({gifs: gifs})
    }
        catch (e) {
            return next(e)
        }
})


module.exports = router