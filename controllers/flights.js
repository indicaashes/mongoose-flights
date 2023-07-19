const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    showFlights,
    index,
    
  };
    
  async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {title: 'All Flights', flights })
    }

  async function showFlights(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', {title: 'Flight Details'});
  }

  function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
  }
  
  async function create(req, res) {
    let newFlight = await Flight.create(req.body)
       
    res.redirect('/flights');
  }