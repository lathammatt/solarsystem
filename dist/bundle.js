(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],3:[function(require,module,exports){
"use strict";

$(document).ready(function (){

	let universe = require("./solar.js");

	var dombox = $("#outbox");


});
},{"./solar.js":8}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
"use strict";

function outputTo(dombox) {
  dombox.append('<ul><li>"Name: Mercury"<li>"Year Discovered: 14th Century"<li>"Mass: 3.3011 X 10^23 kg"<li>"Size: 2439.7km radius"<li>"Distance From Sun: 46,001,200km"<li>"Atmosphere: None"<li>"Satellites: None"<li>"Devices Sent to Study: Mariner 10, Messenger"'
  	);
}

module.exports = outputTo;
},{}],6:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],7:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],8:[function(require,module,exports){
"use strict";

const mercury = require("./mercury");
const venus = require("./venus");
const earth = require("./earth");
const mars = require("./mars");
const jupiter = require("./jupiter");
const saturn = require("./saturn");
const uranus = require("./uranus");
const neptune = require("./neptune");

let solarSystem = {
	mercury,
	venus,
	earth,
	mars,
	jupiter,
	saturn,
	uranus,
	neptune
};

module.exports = solarSystem;
},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./saturn":7,"./uranus":9,"./venus":10}],9:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],10:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[3])


//# sourceMappingURL=bundle.js.map
