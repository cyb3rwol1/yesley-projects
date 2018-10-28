const router = require('express').Router();

const control = require('../controllers/papel.controller');

router.get('/papel', control.getUsuarios);

router.post('/papel',control.createUsuario);
router.put('/papel/:id',control.alterUsuario);
router.delete('/papel/:id',control.deleteUsuario);

module.exports = router;