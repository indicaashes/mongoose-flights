const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.showFlights);
router.get('/', flightsCtrl.index);
router.get('/:id/edit', flightsCtrl.edit);
router.delete('/:id', flightsCtrl.delete);
router.post('/:id', flightsCtrl.newDestination);
router.post('/:id/new', ticket.create);
router.put('/:id', flightsCtrl.update);

module.exports = router;
