(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Earth<li>Year Discovered: um....duh<li>Mass: 5.9724 X 10^24 kg<li>Size: 6371 km radius<li>Distance From Sun: 147,095,000 km<li>Atmosphere: Nitrogen, Oxygen<li>Satellites: One<li>Devices Sent to Study: People, mostly');
}

module.exports = outputTo;


},{}],2:[function(require,module,exports){
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Jupiter<li>Year Discovered: 7th Century BC<li>Mass: 1.8986 X 10^27 kg<li>Size: 69911 km radius<li>Distance From Sun: 778.30 Gm<li>Atmosphere: Ammonia Crystals<li>Satellites: 67<li>Devices Sent to Study: Pioneer, Voyager, Galileo, Juno');
}

module.exports = outputTo;


},{}],3:[function(require,module,exports){
"use strict";

$(document).ready(function (){

	var dombox = $("#output");

	let universe = require("./solar.js");

	// for (var planet in universe) {
	// 	console.log("plan", planet);
	// 	universe.planet;
	// }

	universe.mercury(dombox);
	universe.venus(dombox);
	universe.earth(dombox);
	universe.mars(dombox);
	universe.jupiter(dombox);
	universe.saturn(dombox);
	universe.uranus(dombox);
	universe.neptune(dombox);

	console.log("uni", universe);

});
},{"./solar.js":8}],4:[function(require,module,exports){
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Mars<li>Year Discovered: 1534 BC<li>Mass: 6.4171 X 10^23 kg<li>Size: 3389.5 km radius<li>Distance From Sun: 206.7 Gm<li>Atmosphere: Carbon Dioxide, Argon, Nitrogen<li>Satellites: Two<li>Devices Sent to Study: Mariner, Viking, Pathfinder, Global Surveyor, Odyssey, Curiosity, Orbiter');
}

module.exports = outputTo;


},{}],5:[function(require,module,exports){
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Mercury<li>Year Discovered: 14th Century BC<li>Mass: 3.3011 X 10^23 kg<li>Size: 2439.7 km radius<li>Distance From Sun: 46,001,200 km<li>Atmosphere: None<li>Satellites: None<li>Devices Sent to Study: Mariner 10, Messenger');
}

module.exports = outputTo;


},{}],6:[function(require,module,exports){
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Neptune<li>Year Discovered: 1612<li>Mass: 1.0243 X 10^26 kg<li>Size: 24622 km radius<li>Distance From Sun: 4460 Gm<li>Atmosphere: Ammonia Crystals<li>Satellites: 14<li>Devices Sent to Study: Voyager 2');
}

module.exports = outputTo;


},{}],7:[function(require,module,exports){
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Saturn<li>Year Discovered: 7th Century BC<li>Mass: 5.6836 X 10^26 kg<li>Size: 58232 km radius<li>Distance From Sun: 1350 Gm<li>Atmosphere: Hydrogen, Helium<li>Satellites: 62<li>Devices Sent to Study: Pioneer, Voyager, Cassini-Huygens');
}

module.exports = outputTo;


},{}],8:[function(require,module,exports){
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
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Uranus<li>Year Discovered: 1781<li>Mass: 8.6810 X 10^25 kg<li>Size: 25362 km radius<li>Distance From Sun: 2742 Gm<li>Atmosphere: Hydrogen, Helium<li>Satellites: 27<li>Devices Sent to Study: Voyager 2');
}

module.exports = outputTo;


},{}],10:[function(require,module,exports){
"use strict";

function outputTo(dombox) {

	dombox.append('<ul><li>Name: Venus<li>Year Discovered: 17th Century BC<li>Mass: 4.8675 X 10^24 kg<li>Size: 6051.8 km radius<li>Distance From Sun: 107,477,000 km<li>Atmosphere: Carbon Dioxide, Nitrogen<li>Satellites: None<li>Devices Sent to Study: Venera, Mariner 2, Pioneer, Akatsuki');
}

module.exports = outputTo;


},{}]},{},[3])


//# sourceMappingURL=bundle.js.map
