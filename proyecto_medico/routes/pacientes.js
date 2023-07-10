var express = require('express');
var router = express.Router();
const database = require('../database/conexion')

router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM pacientes', (error, results) => {
        if (error) {
            console.log('Error en la consola', error)
            res.status(500).send("Error en la consulta")
        } else {
            res.render('pacientes', {title: 'pacientes', pacientes:results, option:'disable', estado: true})
        }
    });
});

router.get('/enviar/:clave', function (req, res, next) {
    const clave = req.params.clave;
    connection.query('SELECT * FROM pacientes', (error, results) =>{
        if (error) {
            console.log("Error en la consola ajaj", error)
            res.status(500).send('error en la consulta')
        } else {
            res.render('pacientes', {title: 'pacientes', claveSeleccionada: clave, pacientes: results, opcion: 'disable', estado: false })
        }
    });
});

router.get('/agregar-mascota', function (req, res, next){
    res.sendFile('registro-pacientes.html', {root: 'public'})
})
// agregar pacientes
router.post('/agregar', (req, res) =>{
    

})