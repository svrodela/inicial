const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser= require('body-parser');
const path= require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');
app.use('/',indexRoutes);

//servidor
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
// conexion BD
 mongoose.connect('mongodb+srv://nuevo:FGr0tvWb1xwTzlao@clustersergio.ponuf.mongodb.net/escuela?retryWrites=true&w=majority')
 .then(bd=>confirm.log('la base se conectó')).catch(err=>console.log(err));


//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended:false}));
//rutas

app.listen(app.get('port'),()=>{
    console.log('Servidor funcionando en el puerto',app.get('port'))
});