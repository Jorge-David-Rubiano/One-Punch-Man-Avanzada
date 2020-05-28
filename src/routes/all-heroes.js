const express = require('express');
const router = express.Router();
const pool = require('../database');


// router.get('/all-heroes', (req, res) => {
//     res.render('heroes/all-heroes');
// });



router.get('/all-heroes', async (req, res)=>{
    const heroes = await pool.query('SELECT * FROM heroes');
    res.render('heroes/all-heroes', {heroes});    
});

router.get('/all-heroes-s', async (req, res)=>{
    const heroes = await pool.query('SELECT * FROM heroes WHERE clase = "S"');
    res.render('heroes/all-heroes', {heroes});    
});

router.get('/all-heroes-a', async (req, res)=>{
    const heroes = await pool.query('SELECT * FROM heroes WHERE clase = "A"');
    res.render('heroes/all-heroes', {heroes});    
});

router.get('/all-heroes-b', async (req, res)=>{
    const heroes = await pool.query('SELECT * FROM heroes WHERE clase = "B"');
    res.render('heroes/all-heroes', {heroes});    
});

router.get('/all-heroes-c', async (req, res)=>{
    const heroes = await pool.query('SELECT * FROM heroes WHERE clase = "C"');
    res.render('heroes/all-heroes', {heroes});    
});
router.get('/one-punch-man', async (req,res)=>{    
    res.render('heroes/one-punch-man'), {heroes};
});




module.exports = router;