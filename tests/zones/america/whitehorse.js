"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Whitehorse"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Whitehorse", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Whitehorse", { abbr: true }),

	"1918" : helpers.makeTestYear("America/Whitehorse", [
		["1918-04-14T10:59:59+00:00", "01:59:59", "YST", 540],
		["1918-04-14T11:00:00+00:00", "03:00:00", "YDT", 480],
		["1918-10-27T09:59:59+00:00", "01:59:59", "YDT", 480],
		["1918-10-27T10:00:00+00:00", "01:00:00", "YST", 540]
	]),

	"1919" : helpers.makeTestYear("America/Whitehorse", [
		["1919-05-25T10:59:59+00:00", "01:59:59", "YST", 540],
		["1919-05-25T11:00:00+00:00", "03:00:00", "YDT", 480],
		["1919-11-01T07:59:59+00:00", "23:59:59", "YDT", 480],
		["1919-11-01T08:00:00+00:00", "23:00:00", "YST", 540]
	]),

	"1942" : helpers.makeTestYear("America/Whitehorse", [
		["1942-02-09T10:59:59+00:00", "01:59:59", "YST", 540],
		["1942-02-09T11:00:00+00:00", "03:00:00", "YWT", 480]
	]),

	"1945" : helpers.makeTestYear("America/Whitehorse", [
		["1945-08-14T22:59:59+00:00", "14:59:59", "YWT", 480],
		["1945-08-14T23:00:00+00:00", "15:00:00", "YPT", 480],
		["1945-09-30T09:59:59+00:00", "01:59:59", "YPT", 480],
		["1945-09-30T10:00:00+00:00", "01:00:00", "YST", 540]
	]),

	"1965" : helpers.makeTestYear("America/Whitehorse", [
		["1965-04-25T08:59:59+00:00", "23:59:59", "YST", 540],
		["1965-04-25T09:00:00+00:00", "02:00:00", "YDDT", 420],
		["1965-10-31T08:59:59+00:00", "01:59:59", "YDDT", 420],
		["1965-10-31T09:00:00+00:00", "00:00:00", "YST", 540]
	]),

	"1966" : helpers.makeTestYear("America/Whitehorse", [
		["1966-02-27T08:59:59+00:00", "23:59:59", "YST", 540],
		["1966-02-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1980" : helpers.makeTestYear("America/Whitehorse", [
		["1980-04-27T09:59:59+00:00", "01:59:59", "PST", 480],
		["1980-04-27T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1980-10-26T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1980-10-26T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1981" : helpers.makeTestYear("America/Whitehorse", [
		["1981-04-26T09:59:59+00:00", "01:59:59", "PST", 480],
		["1981-04-26T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1981-10-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1981-10-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1982" : helpers.makeTestYear("America/Whitehorse", [
		["1982-04-25T09:59:59+00:00", "01:59:59", "PST", 480],
		["1982-04-25T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1982-10-31T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1982-10-31T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1983" : helpers.makeTestYear("America/Whitehorse", [
		["1983-04-24T09:59:59+00:00", "01:59:59", "PST", 480],
		["1983-04-24T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1983-10-30T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1983-10-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1984" : helpers.makeTestYear("America/Whitehorse", [
		["1984-04-29T09:59:59+00:00", "01:59:59", "PST", 480],
		["1984-04-29T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1984-10-28T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1984-10-28T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1985" : helpers.makeTestYear("America/Whitehorse", [
		["1985-04-28T09:59:59+00:00", "01:59:59", "PST", 480],
		["1985-04-28T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1985-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1985-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1986" : helpers.makeTestYear("America/Whitehorse", [
		["1986-04-27T09:59:59+00:00", "01:59:59", "PST", 480],
		["1986-04-27T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1986-10-26T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1986-10-26T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1987" : helpers.makeTestYear("America/Whitehorse", [
		["1987-04-05T09:59:59+00:00", "01:59:59", "PST", 480],
		["1987-04-05T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1987-10-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1987-10-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1988" : helpers.makeTestYear("America/Whitehorse", [
		["1988-04-03T09:59:59+00:00", "01:59:59", "PST", 480],
		["1988-04-03T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1988-10-30T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1988-10-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1989" : helpers.makeTestYear("America/Whitehorse", [
		["1989-04-02T09:59:59+00:00", "01:59:59", "PST", 480],
		["1989-04-02T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1989-10-29T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1989-10-29T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1990" : helpers.makeTestYear("America/Whitehorse", [
		["1990-04-01T09:59:59+00:00", "01:59:59", "PST", 480],
		["1990-04-01T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1990-10-28T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1990-10-28T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1991" : helpers.makeTestYear("America/Whitehorse", [
		["1991-04-07T09:59:59+00:00", "01:59:59", "PST", 480],
		["1991-04-07T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1991-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1991-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1992" : helpers.makeTestYear("America/Whitehorse", [
		["1992-04-05T09:59:59+00:00", "01:59:59", "PST", 480],
		["1992-04-05T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1992-10-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1992-10-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1993" : helpers.makeTestYear("America/Whitehorse", [
		["1993-04-04T09:59:59+00:00", "01:59:59", "PST", 480],
		["1993-04-04T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1993-10-31T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1993-10-31T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1994" : helpers.makeTestYear("America/Whitehorse", [
		["1994-04-03T09:59:59+00:00", "01:59:59", "PST", 480],
		["1994-04-03T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1994-10-30T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1994-10-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1995" : helpers.makeTestYear("America/Whitehorse", [
		["1995-04-02T09:59:59+00:00", "01:59:59", "PST", 480],
		["1995-04-02T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1995-10-29T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1995-10-29T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1996" : helpers.makeTestYear("America/Whitehorse", [
		["1996-04-07T09:59:59+00:00", "01:59:59", "PST", 480],
		["1996-04-07T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1996-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1996-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1997" : helpers.makeTestYear("America/Whitehorse", [
		["1997-04-06T09:59:59+00:00", "01:59:59", "PST", 480],
		["1997-04-06T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1997-10-26T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1997-10-26T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1998" : helpers.makeTestYear("America/Whitehorse", [
		["1998-04-05T09:59:59+00:00", "01:59:59", "PST", 480],
		["1998-04-05T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1998-10-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1998-10-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1999" : helpers.makeTestYear("America/Whitehorse", [
		["1999-04-04T09:59:59+00:00", "01:59:59", "PST", 480],
		["1999-04-04T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1999-10-31T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1999-10-31T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2000" : helpers.makeTestYear("America/Whitehorse", [
		["2000-04-02T09:59:59+00:00", "01:59:59", "PST", 480],
		["2000-04-02T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2000-10-29T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2000-10-29T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2001" : helpers.makeTestYear("America/Whitehorse", [
		["2001-04-01T09:59:59+00:00", "01:59:59", "PST", 480],
		["2001-04-01T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2001-10-28T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2001-10-28T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2002" : helpers.makeTestYear("America/Whitehorse", [
		["2002-04-07T09:59:59+00:00", "01:59:59", "PST", 480],
		["2002-04-07T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2002-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2002-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2003" : helpers.makeTestYear("America/Whitehorse", [
		["2003-04-06T09:59:59+00:00", "01:59:59", "PST", 480],
		["2003-04-06T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2003-10-26T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2003-10-26T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2004" : helpers.makeTestYear("America/Whitehorse", [
		["2004-04-04T09:59:59+00:00", "01:59:59", "PST", 480],
		["2004-04-04T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2004-10-31T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2004-10-31T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2005" : helpers.makeTestYear("America/Whitehorse", [
		["2005-04-03T09:59:59+00:00", "01:59:59", "PST", 480],
		["2005-04-03T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2005-10-30T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2005-10-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2006" : helpers.makeTestYear("America/Whitehorse", [
		["2006-04-02T09:59:59+00:00", "01:59:59", "PST", 480],
		["2006-04-02T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2006-10-29T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2006-10-29T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2007" : helpers.makeTestYear("America/Whitehorse", [
		["2007-03-11T09:59:59+00:00", "01:59:59", "PST", 480],
		["2007-03-11T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2007-11-04T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2007-11-04T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2008" : helpers.makeTestYear("America/Whitehorse", [
		["2008-03-09T09:59:59+00:00", "01:59:59", "PST", 480],
		["2008-03-09T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2008-11-02T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2008-11-02T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2009" : helpers.makeTestYear("America/Whitehorse", [
		["2009-03-08T09:59:59+00:00", "01:59:59", "PST", 480],
		["2009-03-08T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2009-11-01T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2009-11-01T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2010" : helpers.makeTestYear("America/Whitehorse", [
		["2010-03-14T09:59:59+00:00", "01:59:59", "PST", 480],
		["2010-03-14T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2010-11-07T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2010-11-07T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2011" : helpers.makeTestYear("America/Whitehorse", [
		["2011-03-13T09:59:59+00:00", "01:59:59", "PST", 480],
		["2011-03-13T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2011-11-06T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2011-11-06T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2012" : helpers.makeTestYear("America/Whitehorse", [
		["2012-03-11T09:59:59+00:00", "01:59:59", "PST", 480],
		["2012-03-11T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2012-11-04T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2012-11-04T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2013" : helpers.makeTestYear("America/Whitehorse", [
		["2013-03-10T09:59:59+00:00", "01:59:59", "PST", 480],
		["2013-03-10T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2013-11-03T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2013-11-03T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2014" : helpers.makeTestYear("America/Whitehorse", [
		["2014-03-09T09:59:59+00:00", "01:59:59", "PST", 480],
		["2014-03-09T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2014-11-02T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2014-11-02T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2015" : helpers.makeTestYear("America/Whitehorse", [
		["2015-03-08T09:59:59+00:00", "01:59:59", "PST", 480],
		["2015-03-08T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2015-11-01T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2015-11-01T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2016" : helpers.makeTestYear("America/Whitehorse", [
		["2016-03-13T09:59:59+00:00", "01:59:59", "PST", 480],
		["2016-03-13T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2016-11-06T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2016-11-06T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2017" : helpers.makeTestYear("America/Whitehorse", [
		["2017-03-12T09:59:59+00:00", "01:59:59", "PST", 480],
		["2017-03-12T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2017-11-05T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2017-11-05T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2018" : helpers.makeTestYear("America/Whitehorse", [
		["2018-03-11T09:59:59+00:00", "01:59:59", "PST", 480],
		["2018-03-11T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2018-11-04T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2018-11-04T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2019" : helpers.makeTestYear("America/Whitehorse", [
		["2019-03-10T09:59:59+00:00", "01:59:59", "PST", 480],
		["2019-03-10T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2019-11-03T08:59:59+00:00", "01:59:59", "PDT", 420],
		["2019-11-03T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"2020" : helpers.makeTestYear("America/Whitehorse", [
		["2020-03-08T09:59:59+00:00", "01:59:59", "PST", 480],
		["2020-03-08T10:00:00+00:00", "03:00:00", "PDT", 420],
		["2020-11-01T06:59:59+00:00", "23:59:59", "PDT", 420],
		["2020-11-01T07:00:00+00:00", "00:00:00", "MST", 420]
	])
};