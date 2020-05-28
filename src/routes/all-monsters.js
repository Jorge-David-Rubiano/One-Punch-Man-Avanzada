const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/all-monsters', async (req, res)=>{
    const monstruos = await pool.query('SELECT * FROM monstruos');
    res.render('monsters/all-monsters', {monstruos});   
});

router.get('/all-monsters-dragon-plus', async (req, res)=>{
    const MDPP = await pool.query('SELECT * FROM monstruos WHERE nivelAmenaza = "Dragón ++";');
    console.log(MDPP);
    res.render('monsters/all-monsters-PP', {MDPP});   
});

router.get('/all-monsters-dragon-plus-1', async (req, res)=>{
    const MDP = await pool.query('SELECT * FROM monstruos WHERE nivelAmenaza = "Dragón +";');
    res.render('monsters/all-monsters-P', {MDP});   
});

router.get('/all-monsters-dragon', async (req, res)=>{
    const D = await pool.query('SELECT * FROM monstruos WHERE nivelAmenaza = "Dragón";');
    res.render('monsters/all-monsters-D', {D});   
});

router.get('/all-monsters-demonio', async (req, res)=>{
    const EV = await pool.query('SELECT * FROM monstruos WHERE nivelAmenaza = "Demonio";');
    res.render('monsters/all-monsters-EV', {EV});   
});

router.get('/all-monsters-desconocido', async (req, res)=>{
    const DES = await pool.query('SELECT * FROM monstruos WHERE nivelAmenaza = "Desconocido";');
    res.render('monsters/all-monsters-DES', {DES});   
});
module.exports = router;