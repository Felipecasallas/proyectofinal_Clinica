var express = require('express');
var router = express.Router();
const { connection } = require('../database/conexion');

router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM medicos', (error, results) => {
    if (error) {
      console.log("Error en la consulta", error)
      res.status(500).send("Error en la consulta")
    } else {
      res.render('medicos', { title: 'medicos', medicos: results })
    }
  });
});

/* GET users listing. */
router.get('/agregar-medico', function (req, res, next) {
  res.send('/registro-medicos.html', { root: 'public' });
});

router.post('/agregar', (req, res) => {
  const nombre = req.body.medicos
  const apellido = req.body.apellido
  const cedula = req.body.cedula
  const consultorio = req.body.consultorio
  const correo = req.body.correo
  const especialidad = req.body.especialidad
  connection.query(`INSERT INTO medicos (cedula, nombre, apellido, especialidad, consultorio, correo) VALUES (${cedula},'${nombre}','${apellido}','${especialidad}',${consultorio},'${correo}')`, (error, results) => {
    
    if (error) {
      console.log("error en la consulta", error)
      res.status(500).send("error en la consulta")
    } else {
      res.redirect('/medicos')
    }
  })
})

module.exports = router;
