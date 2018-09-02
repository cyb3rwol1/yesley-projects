const router = require('express').Router();


const usuarioControl = require('../controllers/usuario.controller');

router.get('/usuarios', usuarioControl.getUsuarios);
router.post('/usuarios',usuarioControl.createUsuario);
router.put('/usuarios/:id',usuarioControl.alterUsuario);
router.delete('/usuarios/:id',usuarioControl.deleteUsuario);

module.exports = router;