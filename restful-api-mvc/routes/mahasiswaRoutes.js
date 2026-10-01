const express = require('express');
const router = express.Router();
const ctrl = memerlukanController = require('../controllers/mahasiswaController');
router.get('/', require('../controllers/mahasiswaController').getAll);
router.get('/:id', require('../controllers/mahasiswaController').getById);
router.post('/', require('../controllers/mahasiswaController').create);
module.exports = router;