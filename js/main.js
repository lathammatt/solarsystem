"use strict";

$(document).ready(function (){

	var dombox = $("#output");

	let universe = require("./solar.js");


	universe.mercury(dombox);
	universe.venus(dombox);
	universe.earth(dombox);
	universe.mars(dombox);
	universe.jupiter(dombox);
	universe.saturn(dombox);
	universe.uranus(dombox);
	universe.neptune(dombox);

});