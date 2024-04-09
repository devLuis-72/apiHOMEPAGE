const express = require('express');
const router = express.Router();

const homepageController = require('./controllers/homepageControllers');

router.get('/noticias', homepageController.getAll);
router.get('/noticia/:id', homepageController.get);
router.post('/noticia', homepageController.post);
router.put('/noticia/:id', homepageController.put);
router.delete('/noticia/:id', homepageController.delete);

module.exports = router;