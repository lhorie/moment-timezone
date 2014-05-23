"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Atlantic/Azores"] = {
	"1911" : helpers.makeTestYear("Atlantic/Azores", [
		["1911-05-24T01:54:31+00:00", "23:59:59", "HMT", 6872 / 60],
		["1911-05-24T01:54:32+00:00", "23:54:32", "AZOT", 120]
	]),

	"1916" : helpers.makeTestYear("Atlantic/Azores", [
		["1916-06-18T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1916-06-18T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1916-11-01T01:59:59+00:00", "00:59:59", "AZOST", 60],
		["1916-11-01T02:00:00+00:00", "00:00:00", "AZOT", 120]
	]),

	"1917" : helpers.makeTestYear("Atlantic/Azores", [
		["1917-03-01T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1917-03-01T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1917-10-15T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1917-10-15T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1918" : helpers.makeTestYear("Atlantic/Azores", [
		["1918-03-02T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1918-03-02T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1918-10-15T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1918-10-15T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1919" : helpers.makeTestYear("Atlantic/Azores", [
		["1919-03-01T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1919-03-01T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1919-10-15T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1919-10-15T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1920" : helpers.makeTestYear("Atlantic/Azores", [
		["1920-03-01T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1920-03-01T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1920-10-15T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1920-10-15T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1921" : helpers.makeTestYear("Atlantic/Azores", [
		["1921-03-01T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1921-03-01T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1921-10-15T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1921-10-15T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1924" : helpers.makeTestYear("Atlantic/Azores", [
		["1924-04-17T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1924-04-17T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1924-10-15T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1924-10-15T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1926" : helpers.makeTestYear("Atlantic/Azores", [
		["1926-04-18T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1926-04-18T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1926-10-03T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1926-10-03T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1927" : helpers.makeTestYear("Atlantic/Azores", [
		["1927-04-10T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1927-04-10T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1927-10-02T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1927-10-02T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1928" : helpers.makeTestYear("Atlantic/Azores", [
		["1928-04-15T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1928-04-15T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1928-10-07T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1928-10-07T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1929" : helpers.makeTestYear("Atlantic/Azores", [
		["1929-04-21T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1929-04-21T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1929-10-06T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1929-10-06T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1931" : helpers.makeTestYear("Atlantic/Azores", [
		["1931-04-19T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1931-04-19T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1931-10-04T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1931-10-04T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1932" : helpers.makeTestYear("Atlantic/Azores", [
		["1932-04-03T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1932-04-03T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1932-10-02T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1932-10-02T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1934" : helpers.makeTestYear("Atlantic/Azores", [
		["1934-04-08T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1934-04-08T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1934-10-07T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1934-10-07T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1935" : helpers.makeTestYear("Atlantic/Azores", [
		["1935-03-31T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1935-03-31T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1935-10-06T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1935-10-06T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1936" : helpers.makeTestYear("Atlantic/Azores", [
		["1936-04-19T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1936-04-19T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1936-10-04T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1936-10-04T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1937" : helpers.makeTestYear("Atlantic/Azores", [
		["1937-04-04T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1937-04-04T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1937-10-03T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1937-10-03T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1938" : helpers.makeTestYear("Atlantic/Azores", [
		["1938-03-27T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1938-03-27T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1938-10-02T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1938-10-02T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1939" : helpers.makeTestYear("Atlantic/Azores", [
		["1939-04-16T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1939-04-16T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1939-11-19T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1939-11-19T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1940" : helpers.makeTestYear("Atlantic/Azores", [
		["1940-02-25T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1940-02-25T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1940-10-06T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1940-10-06T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1941" : helpers.makeTestYear("Atlantic/Azores", [
		["1941-04-06T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1941-04-06T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1941-10-06T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1941-10-06T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1942" : helpers.makeTestYear("Atlantic/Azores", [
		["1942-03-15T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1942-03-15T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1942-04-25T23:59:59+00:00", "22:59:59", "AZOST", 60],
		["1942-04-26T00:00:00+00:00", "00:00:00", "AZOMT", 0],
		["1942-08-15T23:59:59+00:00", "23:59:59", "AZOMT", 0],
		["1942-08-16T00:00:00+00:00", "23:00:00", "AZOST", 60],
		["1942-10-25T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1942-10-25T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1943" : helpers.makeTestYear("Atlantic/Azores", [
		["1943-03-14T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1943-03-14T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1943-04-17T23:59:59+00:00", "22:59:59", "AZOST", 60],
		["1943-04-18T00:00:00+00:00", "00:00:00", "AZOMT", 0],
		["1943-08-28T23:59:59+00:00", "23:59:59", "AZOMT", 0],
		["1943-08-29T00:00:00+00:00", "23:00:00", "AZOST", 60],
		["1943-10-31T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1943-10-31T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1944" : helpers.makeTestYear("Atlantic/Azores", [
		["1944-03-12T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1944-03-12T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1944-04-22T23:59:59+00:00", "22:59:59", "AZOST", 60],
		["1944-04-23T00:00:00+00:00", "00:00:00", "AZOMT", 0],
		["1944-08-26T23:59:59+00:00", "23:59:59", "AZOMT", 0],
		["1944-08-27T00:00:00+00:00", "23:00:00", "AZOST", 60],
		["1944-10-29T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1944-10-29T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1945" : helpers.makeTestYear("Atlantic/Azores", [
		["1945-03-11T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1945-03-11T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1945-04-21T23:59:59+00:00", "22:59:59", "AZOST", 60],
		["1945-04-22T00:00:00+00:00", "00:00:00", "AZOMT", 0],
		["1945-08-25T23:59:59+00:00", "23:59:59", "AZOMT", 0],
		["1945-08-26T00:00:00+00:00", "23:00:00", "AZOST", 60],
		["1945-10-28T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1945-10-28T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1946" : helpers.makeTestYear("Atlantic/Azores", [
		["1946-04-07T00:59:59+00:00", "22:59:59", "AZOT", 120],
		["1946-04-07T01:00:00+00:00", "00:00:00", "AZOST", 60],
		["1946-10-06T00:59:59+00:00", "23:59:59", "AZOST", 60],
		["1946-10-06T01:00:00+00:00", "23:00:00", "AZOT", 120]
	]),

	"1947" : helpers.makeTestYear("Atlantic/Azores", [
		["1947-04-06T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1947-04-06T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1947-10-05T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1947-10-05T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1948" : helpers.makeTestYear("Atlantic/Azores", [
		["1948-04-04T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1948-04-04T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1948-10-03T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1948-10-03T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1949" : helpers.makeTestYear("Atlantic/Azores", [
		["1949-04-03T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1949-04-03T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1949-10-02T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1949-10-02T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1951" : helpers.makeTestYear("Atlantic/Azores", [
		["1951-04-01T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1951-04-01T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1951-10-07T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1951-10-07T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1952" : helpers.makeTestYear("Atlantic/Azores", [
		["1952-04-06T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1952-04-06T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1952-10-05T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1952-10-05T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1953" : helpers.makeTestYear("Atlantic/Azores", [
		["1953-04-05T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1953-04-05T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1953-10-04T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1953-10-04T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1954" : helpers.makeTestYear("Atlantic/Azores", [
		["1954-04-04T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1954-04-04T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1954-10-03T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1954-10-03T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1955" : helpers.makeTestYear("Atlantic/Azores", [
		["1955-04-03T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1955-04-03T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1955-10-02T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1955-10-02T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1956" : helpers.makeTestYear("Atlantic/Azores", [
		["1956-04-01T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1956-04-01T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1956-10-07T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1956-10-07T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1957" : helpers.makeTestYear("Atlantic/Azores", [
		["1957-04-07T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1957-04-07T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1957-10-06T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1957-10-06T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1958" : helpers.makeTestYear("Atlantic/Azores", [
		["1958-04-06T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1958-04-06T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1958-10-05T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1958-10-05T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1959" : helpers.makeTestYear("Atlantic/Azores", [
		["1959-04-05T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1959-04-05T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1959-10-04T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1959-10-04T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1960" : helpers.makeTestYear("Atlantic/Azores", [
		["1960-04-03T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1960-04-03T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1960-10-02T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1960-10-02T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1961" : helpers.makeTestYear("Atlantic/Azores", [
		["1961-04-02T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1961-04-02T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1961-10-01T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1961-10-01T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1962" : helpers.makeTestYear("Atlantic/Azores", [
		["1962-04-01T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1962-04-01T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1962-10-07T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1962-10-07T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1963" : helpers.makeTestYear("Atlantic/Azores", [
		["1963-04-07T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1963-04-07T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1963-10-06T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1963-10-06T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1964" : helpers.makeTestYear("Atlantic/Azores", [
		["1964-04-05T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1964-04-05T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1964-10-04T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1964-10-04T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1965" : helpers.makeTestYear("Atlantic/Azores", [
		["1965-04-04T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1965-04-04T04:00:00+00:00", "03:00:00", "AZOST", 60],
		["1965-10-03T03:59:59+00:00", "02:59:59", "AZOST", 60],
		["1965-10-03T04:00:00+00:00", "02:00:00", "AZOT", 120]
	]),

	"1966" : helpers.makeTestYear("Atlantic/Azores", [
		["1966-04-03T03:59:59+00:00", "01:59:59", "AZOT", 120],
		["1966-04-03T04:00:00+00:00", "03:00:00", "AZOT", 60]
	]),

	"1977" : helpers.makeTestYear("Atlantic/Azores", [
		["1977-03-27T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1977-03-27T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1977-09-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1977-09-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1978" : helpers.makeTestYear("Atlantic/Azores", [
		["1978-04-02T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1978-04-02T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1978-10-01T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1978-10-01T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1979" : helpers.makeTestYear("Atlantic/Azores", [
		["1979-04-01T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1979-04-01T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1979-09-30T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1979-09-30T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1980" : helpers.makeTestYear("Atlantic/Azores", [
		["1980-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1980-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1980-09-28T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1980-09-28T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1981" : helpers.makeTestYear("Atlantic/Azores", [
		["1981-03-29T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1981-03-29T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1981-09-27T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1981-09-27T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1982" : helpers.makeTestYear("Atlantic/Azores", [
		["1982-03-28T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1982-03-28T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1982-09-26T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1982-09-26T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1983" : helpers.makeTestYear("Atlantic/Azores", [
		["1983-03-27T02:59:59+00:00", "01:59:59", "AZOT", 60],
		["1983-03-27T03:00:00+00:00", "03:00:00", "AZOST", 0],
		["1983-09-25T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1983-09-25T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1984" : helpers.makeTestYear("Atlantic/Azores", [
		["1984-03-25T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1984-03-25T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1984-09-30T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1984-09-30T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1985" : helpers.makeTestYear("Atlantic/Azores", [
		["1985-03-31T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1985-03-31T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1985-09-29T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1985-09-29T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1986" : helpers.makeTestYear("Atlantic/Azores", [
		["1986-03-30T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1986-03-30T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1986-09-28T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1986-09-28T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1987" : helpers.makeTestYear("Atlantic/Azores", [
		["1987-03-29T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1987-03-29T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1987-09-27T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1987-09-27T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1988" : helpers.makeTestYear("Atlantic/Azores", [
		["1988-03-27T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1988-03-27T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1988-09-25T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1988-09-25T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1989" : helpers.makeTestYear("Atlantic/Azores", [
		["1989-03-26T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1989-03-26T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1989-09-24T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1989-09-24T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1990" : helpers.makeTestYear("Atlantic/Azores", [
		["1990-03-25T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1990-03-25T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1990-09-30T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1990-09-30T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1991" : helpers.makeTestYear("Atlantic/Azores", [
		["1991-03-31T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1991-03-31T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1991-09-29T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1991-09-29T02:00:00+00:00", "01:00:00", "AZOT", 60]
	]),

	"1992" : helpers.makeTestYear("Atlantic/Azores", [
		["1992-03-29T01:59:59+00:00", "00:59:59", "AZOT", 60],
		["1992-03-29T02:00:00+00:00", "02:00:00", "AZOST", 0],
		["1992-09-27T01:59:59+00:00", "01:59:59", "AZOST", 0],
		["1992-09-27T02:00:00+00:00", "02:00:00", "WET", 0]
	]),

	"1993" : helpers.makeTestYear("Atlantic/Azores", [
		["1993-03-28T00:59:59+00:00", "00:59:59", "WET", 0],
		["1993-03-28T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1993-09-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1993-09-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1994" : helpers.makeTestYear("Atlantic/Azores", [
		["1994-03-27T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1994-03-27T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1994-09-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1994-09-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1995" : helpers.makeTestYear("Atlantic/Azores", [
		["1995-03-26T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1995-03-26T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1995-09-24T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1995-09-24T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1996" : helpers.makeTestYear("Atlantic/Azores", [
		["1996-03-31T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1996-03-31T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1996-10-27T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1996-10-27T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1997" : helpers.makeTestYear("Atlantic/Azores", [
		["1997-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1997-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1997-10-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1997-10-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1998" : helpers.makeTestYear("Atlantic/Azores", [
		["1998-03-29T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1998-03-29T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1998-10-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1998-10-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"1999" : helpers.makeTestYear("Atlantic/Azores", [
		["1999-03-28T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["1999-03-28T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["1999-10-31T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["1999-10-31T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2000" : helpers.makeTestYear("Atlantic/Azores", [
		["2000-03-26T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2000-03-26T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2000-10-29T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2000-10-29T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2001" : helpers.makeTestYear("Atlantic/Azores", [
		["2001-03-25T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2001-03-25T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2001-10-28T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2001-10-28T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2002" : helpers.makeTestYear("Atlantic/Azores", [
		["2002-03-31T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2002-03-31T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2002-10-27T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2002-10-27T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2003" : helpers.makeTestYear("Atlantic/Azores", [
		["2003-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2003-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2003-10-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2003-10-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2004" : helpers.makeTestYear("Atlantic/Azores", [
		["2004-03-28T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2004-03-28T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2004-10-31T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2004-10-31T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2005" : helpers.makeTestYear("Atlantic/Azores", [
		["2005-03-27T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2005-03-27T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2005-10-30T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2005-10-30T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2006" : helpers.makeTestYear("Atlantic/Azores", [
		["2006-03-26T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2006-03-26T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2006-10-29T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2006-10-29T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2007" : helpers.makeTestYear("Atlantic/Azores", [
		["2007-03-25T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2007-03-25T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2007-10-28T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2007-10-28T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2008" : helpers.makeTestYear("Atlantic/Azores", [
		["2008-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2008-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2008-10-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2008-10-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2009" : helpers.makeTestYear("Atlantic/Azores", [
		["2009-03-29T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2009-03-29T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2009-10-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2009-10-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2010" : helpers.makeTestYear("Atlantic/Azores", [
		["2010-03-28T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2010-03-28T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2010-10-31T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2010-10-31T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2011" : helpers.makeTestYear("Atlantic/Azores", [
		["2011-03-27T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2011-03-27T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2011-10-30T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2011-10-30T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2012" : helpers.makeTestYear("Atlantic/Azores", [
		["2012-03-25T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2012-03-25T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2012-10-28T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2012-10-28T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2013" : helpers.makeTestYear("Atlantic/Azores", [
		["2013-03-31T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2013-03-31T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2013-10-27T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2013-10-27T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2014" : helpers.makeTestYear("Atlantic/Azores", [
		["2014-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2014-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2014-10-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2014-10-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2015" : helpers.makeTestYear("Atlantic/Azores", [
		["2015-03-29T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2015-03-29T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2015-10-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2015-10-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2016" : helpers.makeTestYear("Atlantic/Azores", [
		["2016-03-27T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2016-03-27T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2016-10-30T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2016-10-30T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2017" : helpers.makeTestYear("Atlantic/Azores", [
		["2017-03-26T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2017-03-26T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2017-10-29T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2017-10-29T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2018" : helpers.makeTestYear("Atlantic/Azores", [
		["2018-03-25T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2018-03-25T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2018-10-28T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2018-10-28T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2019" : helpers.makeTestYear("Atlantic/Azores", [
		["2019-03-31T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2019-03-31T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2019-10-27T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2019-10-27T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2020" : helpers.makeTestYear("Atlantic/Azores", [
		["2020-03-29T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2020-03-29T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2020-10-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2020-10-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2021" : helpers.makeTestYear("Atlantic/Azores", [
		["2021-03-28T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2021-03-28T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2021-10-31T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2021-10-31T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2022" : helpers.makeTestYear("Atlantic/Azores", [
		["2022-03-27T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2022-03-27T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2022-10-30T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2022-10-30T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2023" : helpers.makeTestYear("Atlantic/Azores", [
		["2023-03-26T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2023-03-26T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2023-10-29T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2023-10-29T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2024" : helpers.makeTestYear("Atlantic/Azores", [
		["2024-03-31T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2024-03-31T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2024-10-27T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2024-10-27T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2025" : helpers.makeTestYear("Atlantic/Azores", [
		["2025-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2025-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2025-10-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2025-10-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2026" : helpers.makeTestYear("Atlantic/Azores", [
		["2026-03-29T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2026-03-29T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2026-10-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2026-10-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2027" : helpers.makeTestYear("Atlantic/Azores", [
		["2027-03-28T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2027-03-28T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2027-10-31T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2027-10-31T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2028" : helpers.makeTestYear("Atlantic/Azores", [
		["2028-03-26T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2028-03-26T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2028-10-29T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2028-10-29T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2029" : helpers.makeTestYear("Atlantic/Azores", [
		["2029-03-25T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2029-03-25T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2029-10-28T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2029-10-28T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2030" : helpers.makeTestYear("Atlantic/Azores", [
		["2030-03-31T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2030-03-31T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2030-10-27T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2030-10-27T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2031" : helpers.makeTestYear("Atlantic/Azores", [
		["2031-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2031-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2031-10-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2031-10-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2032" : helpers.makeTestYear("Atlantic/Azores", [
		["2032-03-28T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2032-03-28T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2032-10-31T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2032-10-31T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2033" : helpers.makeTestYear("Atlantic/Azores", [
		["2033-03-27T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2033-03-27T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2033-10-30T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2033-10-30T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2034" : helpers.makeTestYear("Atlantic/Azores", [
		["2034-03-26T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2034-03-26T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2034-10-29T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2034-10-29T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2035" : helpers.makeTestYear("Atlantic/Azores", [
		["2035-03-25T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2035-03-25T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2035-10-28T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2035-10-28T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2036" : helpers.makeTestYear("Atlantic/Azores", [
		["2036-03-30T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2036-03-30T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2036-10-26T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2036-10-26T01:00:00+00:00", "00:00:00", "AZOT", 60]
	]),

	"2037" : helpers.makeTestYear("Atlantic/Azores", [
		["2037-03-29T00:59:59+00:00", "23:59:59", "AZOT", 60],
		["2037-03-29T01:00:00+00:00", "01:00:00", "AZOST", 0],
		["2037-10-25T00:59:59+00:00", "00:59:59", "AZOST", 0],
		["2037-10-25T01:00:00+00:00", "00:00:00", "AZOT", 60]
	])
};