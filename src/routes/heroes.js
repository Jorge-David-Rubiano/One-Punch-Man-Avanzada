const express= require('express');
const router = require('Express').Router();
const pool = require('../database');


router.get('/heroes', (req,res)=>{
    res.render('heroes/all-top-heroes');
});

router.get('/heroes/Blast', async (req,res)=>{
    const BQ = await pool.query('Select * FROM heroes WHERE nombre = "Blast";');
    res.render('heroes/Blast', { BQ });
    });

    router.get('/heroes/Blast/Combates', async (req,res)=>{
        const BC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "1";');
        res.render('heroes/Blast-Combates', {BC});
    });

    router.get('/heroes/Tatsumaki', async (req,res)=>{
        const TQ = await pool.query('Select * FROM heroes WHERE nombre = "Tatsumaki";');
        res.render('heroes/Tatsumaki', {TQ} );
        });
        router.get('/heroes/Tatsumaki/Combates', async (req,res)=>{
            const TC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "2";');
            res.render('heroes/Tatsumaki-Combates', {TC});
        });

        router.get('/heroes/Silver-Fang', async (req,res)=>{
            const SQ = await pool.query('Select * FROM heroes WHERE nombre = "Silver Fang";');
            res.render('heroes/Silver-Fang', {SQ});
            });
        router.get('/heroes/Silver-Fang/Combates', async (req,res)=>{
            const SC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "3";');
            res.render('heroes/Silver-Fang-Combates', {SC});
        });
            

        router.get('/heroes/Atomic-Samurai', async (req,res)=>{
            const AQ = await pool.query('Select * FROM heroes WHERE nombre = "Atomic Samurai";');
            res.render('heroes/Atomic-Samurai', {AQ});
        });
            router.get('/heroes/Atomic-Samurai/Combates', async (req,res)=>{
                const AC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "4";');
                res.render('heroes/Atomic-Samurai-Combates', {AC});
        });
                
            router.get('/heroes/Child-Emperor', async (req,res)=>{
                const CQ = await pool.query('Select * FROM heroes WHERE nombre = "Child Emperor";');
                res.render('heroes/Child-Emperor', {CQ} );
        });
        router.get('/heroes/Child-Emperor/Combates', async (req,res)=>{
            const CC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "5";');
            res.render('heroes/Child-Emperor-Combates', {CC});
        });

        router.get('/heroes/Metal-Knight', async(req,res)=>{
            const MQ = await pool.query('Select * FROM heroes WHERE nombre = "Metal Knight";');
            res.render('heroes/Metal-Knight', {MQ});
        });
        router.get('/heroes/Metal-Knight/Combates', async (req,res)=>{
            const MC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "6";');
            res.render('heroes/Metal-Knight-Combates', {MC});
        });

        router.get('/heroes/King', async (req,res)=>{
            const KQ = await pool.query('Select * FROM heroes WHERE nombre = "King";');
            res.render('heroes/King', {KQ});
        });
        router.get('/heroes/King/Combates', async (req,res)=>{
            const KC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "7";');
            res.render('heroes/King-Combates', {KC});
        });

        router.get('/heroes/Zombieman', async (req,res)=>{
            const ZQ = await pool.query('Select * FROM heroes WHERE nombre = "Zombieman";');
            res.render('heroes/Zombieman', {ZQ});
        });
        router.get('/heroes/Zombieman/Combates', async (req,res)=>{
            const ZC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "8";');
            res.render('heroes/Zombieman-Combates', {ZC});
        });

        router.get('/heroes/Drive-Knight', async (req,res)=>{
            const DQ = await pool.query('Select * FROM heroes WHERE nombre = "Drive Knight";');
            res.render('heroes/Drive-Knight', {DQ});
        });
        router.get('/heroes/Drive-Knight/Combates', async (req,res)=>{
            const DC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "9";');
            res.render('heroes/Drive-Knight-Combates', {DC});
        });

        router.get('/heroes/Pig-God', async (req,res)=>{
            const PQ = await pool.query('Select * FROM heroes WHERE nombre = "Pig God";');
            res.render('heroes/Pig-God', {PQ});
        });
        router.get('/heroes/Pig-God/Combates', async (req,res)=>{
            const PC = await pool.query('SELECT m.nombre, m.nivelAmenaza, hm.resultado, h.id FROM monstruos m INNER JOIN heroe_monstruo hm ON m.id = hm.id_monstruo INNER JOIN heroes h ON h.id = hm.id_heroe WHERE hm.id_heroe = "10";');
            res.render('heroes/Pig-God-Combates', {PC});
        });
        router.get('/heroes/Gafas', async (req,res)=>{
            const GF = await pool.query('SELECT * FROM heroes WHERE nombre = "Gafas";');
            res.render('heroes/Gafas', {GF});
        });
        router.get('/heroes/Saitama', async (req,res)=>{
            const SA = await pool.query('SELECT * FROM heroes WHERE nombre = "Saitama";');
            res.render('heroes/Saitama', {SA});
        });
 module.exports = router;