"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Atlantic/Canary"] = {
	"1922" : helpers.makeTestYear("Atlantic/Canary", [
		["1922-03-01T01:01:35+00:00", "23:59:59", "LMT", 3696 / 60],
		["1922-03-01T01:01:36+00:00", "00:01:36", "CANT", 60]
	]),

	"1946" : helpers.makeTestYear("Atlantic/Canary", [
		["1946-09-30T01:59:59+00:00", "00:59:59", "CANT", 60],
		["1946-09-30T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1980" : helpers.makeTestYear("Atlantic/Canary", [
		["1980-04-05T23:59:59+00:00", "23:59:59", "WET", 0],
		["1980-04-06T00:00:00+00:00", "01:00:00", "WEST", -60],
		["1980-09-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1980-09-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1981" : helpers.makeTestYear("Atlantic/Canary", [
		["1981-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1981-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1981-09-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1981-09-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1982" : helpers.makeTestYear("Atlantic/Canary", [
		["1982-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["1982-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1982-09-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1982-09-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1983" : helpers.makeTestYear("Atlantic/Canary", [
		["1983-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["1983-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1983-09-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1983-09-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1984" : helpers.makeTestYear("Atlantic/Canary", [
		["1984-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["1984-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1984-09-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1984-09-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1985" : helpers.makeTestYear("Atlantic/Canary", [
		["1985-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["1985-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1985-09-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1985-09-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1986" : helpers.makeTestYear("Atlantic/Canary", [
		["1986-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["1986-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1986-09-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1986-09-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1987" : helpers.makeTestYear("Atlantic/Canary", [
		["1987-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1987-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1987-09-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1987-09-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1988" : helpers.makeTestYear("Atlantic/Canary", [
		["1988-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["1988-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1988-09-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1988-09-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1989" : helpers.makeTestYear("Atlantic/Canary", [
		["1989-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["1989-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1989-09-24T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1989-09-24T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1990" : helpers.makeTestYear("Atlantic/Canary", [
		["1990-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["1990-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1990-09-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1990-09-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1991" : helpers.makeTestYear("Atlantic/Canary", [
		["1991-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["1991-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1991-09-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1991-09-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1992" : helpers.makeTestYear("Atlantic/Canary", [
		["1992-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1992-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1992-09-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1992-09-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1993" : helpers.makeTestYear("Atlantic/Canary", [
		["1993-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["1993-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1993-09-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1993-09-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1994" : helpers.makeTestYear("Atlantic/Canary", [
		["1994-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["1994-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1994-09-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1994-09-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1995" : helpers.makeTestYear("Atlantic/Canary", [
		["1995-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["1995-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1995-09-24T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1995-09-24T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1996" : helpers.makeTestYear("Atlantic/Canary", [
		["1996-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["1996-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1996-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1996-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1997" : helpers.makeTestYear("Atlantic/Canary", [
		["1997-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["1997-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1997-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1997-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1998" : helpers.makeTestYear("Atlantic/Canary", [
		["1998-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["1998-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1998-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1998-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"1999" : helpers.makeTestYear("Atlantic/Canary", [
		["1999-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["1999-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["1999-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["1999-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2000" : helpers.makeTestYear("Atlantic/Canary", [
		["2000-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2000-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2000-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2000-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2001" : helpers.makeTestYear("Atlantic/Canary", [
		["2001-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2001-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2001-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2001-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2002" : helpers.makeTestYear("Atlantic/Canary", [
		["2002-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2002-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2002-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2002-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2003" : helpers.makeTestYear("Atlantic/Canary", [
		["2003-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2003-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2003-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2003-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2004" : helpers.makeTestYear("Atlantic/Canary", [
		["2004-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2004-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2004-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2004-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2005" : helpers.makeTestYear("Atlantic/Canary", [
		["2005-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2005-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2005-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2005-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2006" : helpers.makeTestYear("Atlantic/Canary", [
		["2006-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2006-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2006-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2006-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2007" : helpers.makeTestYear("Atlantic/Canary", [
		["2007-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2007-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2007-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2007-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2008" : helpers.makeTestYear("Atlantic/Canary", [
		["2008-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2008-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2008-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2008-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2009" : helpers.makeTestYear("Atlantic/Canary", [
		["2009-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2009-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2009-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2009-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2010" : helpers.makeTestYear("Atlantic/Canary", [
		["2010-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2010-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2010-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2010-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2011" : helpers.makeTestYear("Atlantic/Canary", [
		["2011-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2011-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2011-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2011-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2012" : helpers.makeTestYear("Atlantic/Canary", [
		["2012-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2012-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2012-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2012-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2013" : helpers.makeTestYear("Atlantic/Canary", [
		["2013-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2013-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2013-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2013-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2014" : helpers.makeTestYear("Atlantic/Canary", [
		["2014-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2014-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2014-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2014-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2015" : helpers.makeTestYear("Atlantic/Canary", [
		["2015-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2015-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2015-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2015-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2016" : helpers.makeTestYear("Atlantic/Canary", [
		["2016-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2016-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2016-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2016-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2017" : helpers.makeTestYear("Atlantic/Canary", [
		["2017-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2017-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2017-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2017-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2018" : helpers.makeTestYear("Atlantic/Canary", [
		["2018-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2018-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2018-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2018-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2019" : helpers.makeTestYear("Atlantic/Canary", [
		["2019-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2019-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2019-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2019-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2020" : helpers.makeTestYear("Atlantic/Canary", [
		["2020-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2020-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2020-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2020-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2021" : helpers.makeTestYear("Atlantic/Canary", [
		["2021-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2021-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2021-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2021-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2022" : helpers.makeTestYear("Atlantic/Canary", [
		["2022-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2022-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2022-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2022-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2023" : helpers.makeTestYear("Atlantic/Canary", [
		["2023-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2023-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2023-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2023-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2024" : helpers.makeTestYear("Atlantic/Canary", [
		["2024-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2024-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2024-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2024-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2025" : helpers.makeTestYear("Atlantic/Canary", [
		["2025-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2025-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2025-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2025-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2026" : helpers.makeTestYear("Atlantic/Canary", [
		["2026-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2026-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2026-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2026-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2027" : helpers.makeTestYear("Atlantic/Canary", [
		["2027-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2027-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2027-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2027-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2028" : helpers.makeTestYear("Atlantic/Canary", [
		["2028-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2028-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2028-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2028-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2029" : helpers.makeTestYear("Atlantic/Canary", [
		["2029-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2029-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2029-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2029-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2030" : helpers.makeTestYear("Atlantic/Canary", [
		["2030-03-31T00:59:59+00:00", "00:59:59", "WET", 0],
		["2030-03-31T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2030-10-27T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2030-10-27T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2031" : helpers.makeTestYear("Atlantic/Canary", [
		["2031-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2031-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2031-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2031-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2032" : helpers.makeTestYear("Atlantic/Canary", [
		["2032-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["2032-03-28T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2032-10-31T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2032-10-31T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2033" : helpers.makeTestYear("Atlantic/Canary", [
		["2033-03-27T00:59:59+00:00", "00:59:59", "WET", 0],
		["2033-03-27T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2033-10-30T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2033-10-30T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2034" : helpers.makeTestYear("Atlantic/Canary", [
		["2034-03-26T00:59:59+00:00", "00:59:59", "WET", 0],
		["2034-03-26T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2034-10-29T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2034-10-29T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2035" : helpers.makeTestYear("Atlantic/Canary", [
		["2035-03-25T00:59:59+00:00", "00:59:59", "WET", 0],
		["2035-03-25T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2035-10-28T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2035-10-28T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2036" : helpers.makeTestYear("Atlantic/Canary", [
		["2036-03-30T00:59:59+00:00", "00:59:59", "WET", 0],
		["2036-03-30T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2036-10-26T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2036-10-26T01:00:00+00:00", "01:00:00", "WET", 0]
	]),

	"2037" : helpers.makeTestYear("Atlantic/Canary", [
		["2037-03-29T00:59:59+00:00", "00:59:59", "WET", 0],
		["2037-03-29T01:00:00+00:00", "02:00:00", "WEST", -60],
		["2037-10-25T00:59:59+00:00", "01:59:59", "WEST", -60],
		["2037-10-25T01:00:00+00:00", "01:00:00", "WET", 0]
	])
};