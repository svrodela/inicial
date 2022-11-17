const express = require('express');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

router.get('/', async (req, res) => {
    const valores = await Valor.find();
    console.log(valores);
    res.render('index.ejs',{
        valores
    });
});

router.get('/ver', async (req, res) => {
    const valores = await Valor.find();
    console.log(valores);
    res.status(200).json({ reg: valores })
});


router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async(req,res)=>{
    const {id}=req.params;
    await Valor.findByIdAndRemove(id);
    res.redirect('/');

})
module.exports = router;