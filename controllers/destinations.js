const Flight = require('../models/flight');

module.exports = {
  newDestination,
};





async function newDestination(req, res) {
  let newFlight = await Flight.findById(req.params.id)
  try {
    await flight.save()
  } catch(err) {
    console.log(err)
  }
     
  res.redirect(`/flights/${flight.id}`);
}