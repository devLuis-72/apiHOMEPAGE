const express = require('express');
const router = express.Router();

const homepageController = require('./controllers/homepageControllers');

router.get('/noticias', homepageController.getAll);

module.exports = router;