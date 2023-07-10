var express = require('express');
var router = express.Router();
var { connection } = require('../database/conexion');

router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM cita_medica', (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            res.render('citas', { title: 'citas', citas: results })
        }
    });
});
router.get('/agregar-cita', function (req, res, next) {
    res.sendFile('registro-citas.html', { root: 'public' })
});
router.post('/agregar-cita',function(req, res, next){
    const cedulaPaciente  = req.body.cedulaPaciente;
    const fecha = req.body.fecha;
    const especialidad = req.body.especialidad;
});

module.exports = router