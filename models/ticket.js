const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
    seat: {
        type: String, 
        match: /A[A-F][1-9]{\d?/,
        require: true,
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
    },
    price: {
        type: Number,
        min: 0,
}
});

module.exports = mongoose.model('ticket', ticketSchema);