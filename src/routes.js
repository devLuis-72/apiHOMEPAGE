const express = require('express');
const router = express.Router();

const homepageController = require('./controllers/homepageControllers');

router.get('/noticias', homepageController.getAll);
router.get('/noticia/:id', homepageController.get);

module.exports = router;