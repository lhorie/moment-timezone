"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Ciudad_Juarez"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Ciudad_Juarez", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Ciudad_Juarez", { abbr: true }),

	"1922" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1922-01-01T06:59:59+00:00", "23:54:03", "LMT", 25556 / 60],
		["1922-01-01T07:00:00+00:00", "00:00:00", "MST", 420]
	]),

	"1927" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1927-06-11T05:59:59+00:00", "22:59:59", "MST", 420],
		["1927-06-11T06:00:00+00:00", "00:00:00", "CST", 360]
	]),

	"1930" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1930-11-15T05:59:59+00:00", "23:59:59", "CST", 360],
		["1930-11-15T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1931" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1931-05-02T05:59:59+00:00", "22:59:59", "MST", 420],
		["1931-05-02T06:00:00+00:00", "00:00:00", "MDT", 360],
		["1931-10-01T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1931-10-01T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1932" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1932-04-01T06:59:59+00:00", "23:59:59", "MST", 420],
		["1932-04-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1996" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1996-04-07T07:59:59+00:00", "01:59:59", "CST", 360],
		["1996-04-07T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1996-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1996-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1997" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1997-04-06T07:59:59+00:00", "01:59:59", "CST", 360],
		["1997-04-06T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1997-10-26T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1997-10-26T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1998" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1998-04-05T08:59:59+00:00", "02:59:59", "CST", 360],
		["1998-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1998-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1998-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1999" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["1999-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["1999-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1999-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1999-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2000" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2000-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2000-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2000-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2000-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2001" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2001-05-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2001-05-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2001-09-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2001-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2002" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2002-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["2002-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2002-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2002-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2003" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2003-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2003-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2003-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2003-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2004" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2004-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["2004-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2004-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2004-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2005" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2005-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2005-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2005-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2005-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2006" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2006-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2006-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2006-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2006-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2007" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2007-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["2007-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2007-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2007-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2008" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2008-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2008-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2008-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2008-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2009" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2009-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["2009-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2009-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2009-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2010" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2010-03-14T08:59:59+00:00", "01:59:59", "MST", 420],
		["2010-03-14T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2010-11-07T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2010-11-07T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2011" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2011-03-13T08:59:59+00:00", "01:59:59", "MST", 420],
		["2011-03-13T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2011-11-06T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2011-11-06T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2012" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2012-03-11T08:59:59+00:00", "01:59:59", "MST", 420],
		["2012-03-11T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2012-11-04T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2012-11-04T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2013" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2013-03-10T08:59:59+00:00", "01:59:59", "MST", 420],
		["2013-03-10T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2013-11-03T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2013-11-03T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2014" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2014-03-09T08:59:59+00:00", "01:59:59", "MST", 420],
		["2014-03-09T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2014-11-02T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2014-11-02T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2015" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2015-03-08T08:59:59+00:00", "01:59:59", "MST", 420],
		["2015-03-08T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2015-11-01T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2015-11-01T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2016" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2016-03-13T08:59:59+00:00", "01:59:59", "MST", 420],
		["2016-03-13T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2016-11-06T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2016-11-06T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2017" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2017-03-12T08:59:59+00:00", "01:59:59", "MST", 420],
		["2017-03-12T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2017-11-05T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2017-11-05T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2018" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2018-03-11T08:59:59+00:00", "01:59:59", "MST", 420],
		["2018-03-11T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2018-11-04T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2018-11-04T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2019" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2019-03-10T08:59:59+00:00", "01:59:59", "MST", 420],
		["2019-03-10T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2019-11-03T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2019-11-03T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2020" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2020-03-08T08:59:59+00:00", "01:59:59", "MST", 420],
		["2020-03-08T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2020-11-01T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2020-11-01T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2021" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2021-03-14T08:59:59+00:00", "01:59:59", "MST", 420],
		["2021-03-14T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2021-11-07T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2021-11-07T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2022" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2022-03-13T08:59:59+00:00", "01:59:59", "MST", 420],
		["2022-03-13T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2022-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2022-10-30T08:00:00+00:00", "02:00:00", "CST", 360],
		["2022-11-30T05:59:59+00:00", "23:59:59", "CST", 360],
		["2022-11-30T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"2023" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2023-03-12T08:59:59+00:00", "01:59:59", "MST", 420],
		["2023-03-12T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2023-11-05T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2023-11-05T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2024" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2024-03-10T08:59:59+00:00", "01:59:59", "MST", 420],
		["2024-03-10T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2024-11-03T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2024-11-03T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2025" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2025-03-09T08:59:59+00:00", "01:59:59", "MST", 420],
		["2025-03-09T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2025-11-02T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2025-11-02T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2026" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2026-03-08T08:59:59+00:00", "01:59:59", "MST", 420],
		["2026-03-08T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2026-11-01T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2026-11-01T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2027" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2027-03-14T08:59:59+00:00", "01:59:59", "MST", 420],
		["2027-03-14T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2027-11-07T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2027-11-07T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2028" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2028-03-12T08:59:59+00:00", "01:59:59", "MST", 420],
		["2028-03-12T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2028-11-05T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2028-11-05T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2029" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2029-03-11T08:59:59+00:00", "01:59:59", "MST", 420],
		["2029-03-11T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2029-11-04T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2029-11-04T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2030" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2030-03-10T08:59:59+00:00", "01:59:59", "MST", 420],
		["2030-03-10T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2030-11-03T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2030-11-03T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2031" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2031-03-09T08:59:59+00:00", "01:59:59", "MST", 420],
		["2031-03-09T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2031-11-02T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2031-11-02T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2032" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2032-03-14T08:59:59+00:00", "01:59:59", "MST", 420],
		["2032-03-14T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2032-11-07T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2032-11-07T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2033" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2033-03-13T08:59:59+00:00", "01:59:59", "MST", 420],
		["2033-03-13T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2033-11-06T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2033-11-06T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2034" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2034-03-12T08:59:59+00:00", "01:59:59", "MST", 420],
		["2034-03-12T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2034-11-05T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2034-11-05T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2035" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2035-03-11T08:59:59+00:00", "01:59:59", "MST", 420],
		["2035-03-11T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2035-11-04T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2035-11-04T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2036" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2036-03-09T08:59:59+00:00", "01:59:59", "MST", 420],
		["2036-03-09T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2036-11-02T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2036-11-02T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2037" : helpers.makeTestYear("America/Ciudad_Juarez", [
		["2037-03-08T08:59:59+00:00", "01:59:59", "MST", 420],
		["2037-03-08T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2037-11-01T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2037-11-01T08:00:00+00:00", "01:00:00", "MST", 420]
	])
};