var dists = require("../configs/districts.json");
var map = require("./map.js");

var areas = [];

var Handlers = {};

Handlers.getAreaMarks = function(req, res){
  var area;
  
  for(var i in dists.districts){
    var dist = dists.districts[i];

    if(dist){
      area = new map.Area(dist.lng, dist.lat);
      areas.push(area);
    }
  }

  res.end(JSON.stringify(areas[0].getMarks()));
}

module.exports = Handlers;