'use strict';

function Trip(t){
  this.name = t.name;
  this.cash = t.cash;
  this.startCoors = {lat:parseFloat(t.lat), lng:parseFloat(t.lng)};
  this.endCoors = {lat:parseFloat(t.lat), lng:parseFloat(t.lng)};
  this.mpg = t.mpg;
  this.gcost = t.gcost;
  this.start = new Date(t.start);
  this.end = new Date(t.end);

}

Object.defineProperty(Trip, 'collection', {
  get: function(){return global.mongodb.collection('trips');}
});

Trip.all = function(cb){
  Trip.collection.find().toArray(cb);
};

Trip.create = function(t, cb){
  var o = new Trip(t);
  Trip.collection.save(o, cb);
};

Trip.prototype.save = function(cb){
  Trip.collection.save(this, cb);
};

module.exports = Trip;

