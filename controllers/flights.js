const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    addToCast
  };
  
  async function addToCast(req, res) {
    const movie = await Movie.findById(req.params.id);
    // The cast array holds the performer's ObjectId (referencing)
    movie.cast.push(req.body.performerId);
    await movie.save();
    res.redirect(`/movies/${movie._id}`);
  }
  
  async function newPerformer(req, res) {
    //Sort performers by their name
    const performers = await Performer.find({}).sort('name');
    res.render('performers/new', { title: 'Add Performer', performers });
  }
  
  async function create(req, res) {
 
    req.body.born += 'T00:00';
    try {
      await Performer.create(req.body);
    } catch (err) {
      console.log(err);
    }
    res.redirect('/performers/new');
  }