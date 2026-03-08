const { Schema } = require('mongoose');

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,     //by or sell
});

module.exports = {OrdersSchema};