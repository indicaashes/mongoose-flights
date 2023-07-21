const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations')

router.post('/', destinationsCtrl.create);


module.exports = router;