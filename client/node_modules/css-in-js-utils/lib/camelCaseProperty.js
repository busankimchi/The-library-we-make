"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = camelCaseProperty;
var DASH = /-([a-z])/g;
var MS = /^Ms/g;

function toUpper(match) {
  return match[1].toUpperCase();
}

function camelCaseProperty(property) {
  return property.replace(DASH, toUpper).replace(MS, 'ms');
}