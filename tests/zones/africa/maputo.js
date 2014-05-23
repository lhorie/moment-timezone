"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Maputo"] = {
	"1903" : helpers.makeTestYear("Africa/Maputo", [
		["1903-02-28T21:49:39+00:00", "23:59:59", "LMT", -7820 / 60],
		["1903-02-28T21:49:40+00:00", "23:49:40", "CAT", -120]
	])
};