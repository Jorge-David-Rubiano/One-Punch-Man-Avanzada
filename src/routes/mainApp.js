const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/mainApp', (req, res)=>{
    res.render('heroes/mainApp');
});

router.get('/mainApp/celulas-monstruosas', (req, res)=>{
    res.render('heroes/celulasM');
});

router.get('/mainApp/patrocinador', (req, res)=>{
    res.render('heroes/patrocinador');
});

router.get('/mainApp/agradecimientos', async (req, res)=>{
    res.render('heroes/agradecimientos');
    });
module.exports = router;