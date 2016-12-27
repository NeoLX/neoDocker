var distConfig = require("../configs/districts.json");

var Area = function(lng, lat){

  var mlng = lng;
  var mlat = lat;
  var marks = [];

  var createMark = function(){
    var ran_x = getRandomNum(mlng);
    var ran_y = getRandomNum(mlat);
    if(isInRange(ran_x, ran_y)){
      marks.push({
        lng:ran_x, 
        lat:ran_y
      });
    }
  }

  var getRandomNum = function(x)
  {
    var min = x - distConfig.area.radius / distConfig.LNG_LAT_DISTRICT_UNIT;
    // var max = x + distConfig.area.radius / distConfig.LNG_LAT_DISTRICT_UNIT;
    var rand = Math.random() * distConfig.area.radius / distConfig.LNG_LAT_DISTRICT_UNIT;
    var ran_num = (min + rand * 2);
    return ran_num;
  }

  var isInRange = function(lng, lat){
    var x = Math.pow((this.lng-0)-(lng-0), 2);
    var y = Math.pow((this.lat-0)-(lat-0), 2);
    var r = Math.sqrt(x+y) * distConfig.LNG_LAT_DISTRICT_UNIT;

    if(distConfig.area.radius < r){
      return false;
    }else {
      return true;
    }
  }

  while(marks.length < distConfig.area.mark.count){
      createMark();
  }

  this.getMarks = function(){
    return marks;
  }

  // console.log(marks.length);
  // console.log(marks.toString());
}

// var Mark = function(lng, lat){
//   var mlng = lng;
//   var mlat = lat;

//   this.getLng = function(){
//     return mlng;
//   };

//   this.getLat = function(){
//     return mlat;
//   };

//   this.toString = function(){
//     console.log(`MARK[${mlng}][${mlat}]`);
//   }
// }

var Map = {};
Map.Area = Area;

// var a = new Area("113.372786","23.125490");

module.exports = Map;
