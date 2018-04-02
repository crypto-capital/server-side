'use strict';

const mongoose = require('mongoose');
const Flight = mongoose.Schema({
  From: {type: String, required: true},
  To: {type: String, required: true},
  FlightNumber: {type: String, required: true},
  Departs: {type: String, required: true},
  Arrives: {type: String, required: true},
  MainCabinPrice: {type: String, required: true},
  FirstClassPrice: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('flight', Flight);
