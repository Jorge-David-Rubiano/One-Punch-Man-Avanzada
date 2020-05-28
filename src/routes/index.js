const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req, res)=>{
    res.render('heroes/mainApp');    
});

module.exports = router;