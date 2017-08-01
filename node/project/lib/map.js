var distConfig = require("../configs/districts.json");
var util = require("./util.js");

var Area = function (lng, lat) {

  //区域中心点
  var mlng = lng;
  var mlat = lat;
  //标记
  var marks = [];
  var itemHelper = new Area.ItemHelper(distConfig.districts[0]);

  var init = function () {

    while (marks.length < distConfig.districts[0].marks.count) {
      createMark();
    }
  }

  //新建坐标点
  var createMark = function () {
    var ran_x = Area.getRandomNum(mlng);
    var ran_y = Area.getRandomNum(mlat);
    if (isInRange(ran_x, ran_y)) {
      marks.push(new Mark(ran_x, ran_y, itemHelper.getRandomItem(), refreshMark));
    }
  }

  var refreshMark = function (mark) {
    console.log("mark callback");
  }

  //判断是否在范围内
  var isInRange = function (lng, lat) {
    var x = Math.pow((this.lng - 0) - (lng - 0), 2);
    var y = Math.pow((this.lat - 0) - (lat - 0), 2);
    var r = Math.sqrt(x + y) * distConfig.LNG_LAT_DISTRICT_UNIT;

    if (distConfig.radius < r) {
      return false;
    } else {
      return true;
    }
  }

  //获取点列表
  this.getMarks = function () {
    var m = [];
    for (var i in marks) {
      m.push({
        lng: marks[i].getLng(),
        lat: marks[i].getLat(),
        item: marks[i].getItem()
      })
    }
    return m;
  }

  init();
}

//生成随机数
Area.getRandomNum = function (x) {
  var min = x - 0 - distConfig.districts[0].radius / distConfig.LNG_LAT_DISTRICT_UNIT;
  var max = x - 0 + distConfig.districts[0].radius / distConfig.LNG_LAT_DISTRICT_UNIT;
  return util.getRandomNum(min, max);
  // var rand = Math.random() * distConfig.radius / distConfig.LNG_LAT_DISTRICT_UNIT;
  // var ran_num = (min + rand * 2);
  // return ran_num;
}

Area.ItemHelper = function (dc) {
  var items = dc.items;
  var itemMap;
  var onlineItemCount = dc.onlineItemCount;

  var init = function () {
    itemMap = {};
    for (var i in items) {
      var item = items[i];
      itemMap[item.id] = item;//init itemMap
      item.restCount = item.count;//init restCount
    }
  }

  this.getItemCount = function (id) {
    return itemMap[id] ? itemMap[id].count : null;
  }

  // this.getSumItemCount = function () {
  //   var c = 0;
  //   for (var i in items) {
  //     c += items[i].count;
  //   }
  //   return c;
  // }

  // this.getSumRestItemCount = function(){
  //   var c = 0;
  //   var is = this.getRestItems();
  //   for (var i in items) {
  //     c += items[i].count;
  //   }
  //   return c;
  // }

  this.getRestItems = function () {
    var arr = []
    for (var i in items) {
      if (items[i] && items[i].restCount > 0) {
        arr.push(items[i]);
      }
    }
    return arr;
  }

  this.getRandomItem = function () {
    var ra = this.getRestItems();
    var idx = util.getRandomNumFloor(0, ra.length);

    var item = ra[idx];
    var ret = {
      id: item.id,
      name: item.name,
      count: util.getRandomNumCeil(0, item.restCount)
    };
    item.restCount -= ret.count;

    return ret;
  }

  init();
}

var Mark = function (lng, lat, item, onEnptyCallback) {
  var mlng = lng;
  var mlat = lat;
  var mItem = item;
  var mCreateTime = new Date();

  //取经度
  this.getLng = function () {
    return mlng;
  };

  //取纬度
  this.getLat = function () {
    return mlat;
  };

  //取创建时间
  this.getCreateTime = function () {
    return mCreateTime;
  }

  this.getItem = function () {
    return mItem;
  }

  this.toString = function () {
    console.log(`MARK[${mlng}][${mlat}]`);
  }
}

var Map = {};
Map.Area = Area;

// var a = new Area("113.372786","23.125490");

module.exports = Map;
