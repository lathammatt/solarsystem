"use strict";

$(document).ready(function (){

	var dombox = $("#output");

	let universe = require("./solar.js");

	// for (var i = 0; i < universe.length; i++) {
	// 	universe.i(dombox);
	// }
	universe.mercury(dombox);
	universe.venus(dombox);
	universe.earth(dombox);
	universe.mars(dombox);

	console.log("uni", universe);

});