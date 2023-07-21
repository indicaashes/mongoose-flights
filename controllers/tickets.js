const Ticket= require('../model/ticket');
const Flight= require('../model/flight');

async function create(req, res) {
    try{
        await Ticket.create(req.body);
        
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`);
}

module.exports = {
    create,
};