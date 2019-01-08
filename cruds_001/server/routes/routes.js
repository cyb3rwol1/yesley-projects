const router = require('express').Router();


const usuarioControl = require('../controllers/usuario.controller');
const papelControl = require('../controllers/papel.controller');

//Usuario
router.get('/usuario', usuarioControl.getUsuarios);
router.get('/usuario/all', usuarioControl.getAllUsuarios);
router.post('/usuario',usuarioControl.createUsuario);
router.put('/usuario/:id',usuarioControl.alterUsuario);
router.delete('/usuario/:id',usuarioControl.deleteUsuario);

//Papel
router.get('/papel/all', papelControl.getAllPapel);

module.exports = router;