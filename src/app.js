window.$ = require("jquery");
require("backbone");
window.Handlebars = require("handlebars");
var JSON2 = require('JSON2');
var AppView = require("./todos");
$(function() {
  var App = new AppView;
});
