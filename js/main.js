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