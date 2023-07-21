const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  showFlights,
  new: newFlight,
  create,
  delete: deleteFlight,
  edit,
  update,
};
    
  async function index(req, res) {
    const flights = await Flight.findById(req.params.id);
    res.render('flights/index', {title: 'All Flights', flights });
    }

  async function showFlights(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: req.params.id});

    res.render('flights/show', {title: 'Flight Details',
  flight, tickets});
  }
 
  function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
  }
  
  async function create(req, res) {
     Flight.create(req.body);
       
    res.redirect('/flights');
  }

  function deleteFlight(req, res) {
    Flight.deleteOne(req.params.id);

  } 
  
  function edit(req, res) {
    const flight = Flight.getOne(req.params.id);
    res.render('flights/edit', {
      title: "Edit Flights",
      flight,
    });
  }

  function update(req, res) {
    req.body.done = !!req.body.done;
    Flight.update(req.params.id, req.body);
    res.redirect(`/flights/${req.params.id}`);
  }