'use strict';

var Trip = require('../models/trip');

exports.init = function(req, res){
  res.render('trips/new');
};

exports.create = function(req, res){
  Trip.create(req.body, function(){
    console.log(req.body);
    res.redirect('/trips');
  });
};
