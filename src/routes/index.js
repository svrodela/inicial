const express = require('express');
const router = express.Router();
//const model = require('../model/valores')();

const Valor = require('../model/valores');

router.get('/',(req, res)=>{
    res.render('index',{
       nombre:'Sergio' 
    })
});

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});

module.exports = router;
