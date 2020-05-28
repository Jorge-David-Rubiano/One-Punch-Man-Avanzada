const express= require('express');
const router = require('Express').Router();
const pool = require('../database');


router.get('/monsters/Black%20Sperm', async(req,res)=>{
    const BSQ = await pool.query('Select * FROM monstruos WHERE id = "3"');
    res.render('monsters/Black Sperm-Wiki', {BSQ});
});

router.get('/monsters/Haragiri', async(req,res)=>{
    const HARAQ = await pool.query('Select * FROM monstruos WHERE id = "10"');
    res.render('monsters/Haragiri-Wiki', {HARAQ});
});

router.get('/monsters/Melzargard', async(req,res)=>{
    const MELQ = await pool.query('Select * FROM monstruos WHERE id = "11"');
    res.render('monsters/Melzargard-Wiki', {MELQ});
});

router.get('/monsters/Agua%20Natural%20Mal', async(req,res)=>{
    const EVILQ = await pool.query('Select * FROM monstruos WHERE id = "5"');
    res.render('monsters/Evil Water-Wiki', {EVILQ});
});

router.get('/monsters/Phoenix%20Man', async(req,res)=>{
    const PHOQ = await pool.query('Select * FROM monstruos WHERE id = "12"');
    res.render('monsters/Phoenix Man-Wiki', {PHOQ});
});

router.get('/monsters/Cienpies%20Anciano', async(req,res)=>{
    const CIENQ = await pool.query('Select * FROM monstruos WHERE id = "6"');
    res.render('monsters/Cienpies Anciano-Wiki', {CIENQ});
});


router.get('/monsters/Meteoro', async(req,res)=>{
    const METQ = await pool.query('Select * FROM monstruos WHERE id = "13"');
    res.render('monsters/Meteoro-Wiki', {METQ});
});

router.get('/monsters/Encias', async(req,res)=>{
    const ENCQ = await pool.query('Select * FROM monstruos WHERE id = "8"');
    res.render('monsters/Encias-Wiki', {ENCQ});
});

router.get('/monsters/Eyesight', async(req,res)=>{
    const EYEQ = await pool.query('Select * FROM monstruos WHERE id = "14"');
    res.render('monsters/Eyesight-Wiki', {EYEQ});
});

router.get('/monsters/Garou', async(req,res)=>{
    const GAQ = await pool.query('Select * FROM monstruos WHERE id = "0"');
    res.render('monsters/Garou-Wiki', {GAQ});
});

router.get('/monsters/Fist%20Fight%20Djinn', async(req,res)=>{
    const FISTQ = await pool.query('Select * FROM monstruos WHERE id = "15"');
    res.render('monsters/Fist Fight Djinn-Wiki', {FISTQ});
});

router.get('/monsters/Rover', async(req,res)=>{
    const ROQ = await pool.query('Select * FROM monstruos WHERE id = "4"');
    res.render('monsters/Rover-Wiki', {ROQ});
});

router.get('/monsters/Psykos', async(req,res)=>{
    const PSYQ= await pool.query('Select * FROM monstruos WHERE id = "2"');
    res.render('monsters/Psykos-Wiki', {PSYQ});
});

router.get('/monsters/Orochi', async(req,res)=>{
    const OROQ = await pool.query('Select * FROM monstruos WHERE id = "1"');
    res.render('monsters/Orochi-Wiki', {OROQ});
});

router.get('/monsters/Evil%20Eye', async(req,res)=>{
    const EVEYEQ= await pool.query('Select * FROM monstruos WHERE id = "16"');
    res.render('monsters/Evil Eye-Wiki', {EVEYEQ});
});

router.get('/monsters/Emperador%20Sin%20Ho', async(req,res)=>{
    const EMPQ= await pool.query('Select * FROM monstruos WHERE id = "7"');
    res.render('monsters/Emperador Sin Hogar-Wiki', {EMPQ});
});

router.get('/monsters/Pureblood', async(req,res)=>{
    const PUREQ= await pool.query('Select * FROM monstruos WHERE id = "17"');
    res.render('monsters/Pureblood-Wiki', {PUREQ});
});
router.get('/monsters/Nyan', async(req,res)=>{
    const MC= await pool.query('Select * FROM monstruos WHERE id = "9"');
    res.render('monsters/Nyan-Wiki', {MC});
});


module.exports = router;