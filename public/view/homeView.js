'use strict';

var app = app || {};

(function(module) {

  var homeView = {};
  homeView.initHomePage = function() {
    $('.aboutMe').fadeOut();
    $('.repos').fadeOut();
    $('article').fadeOut();
    $('.homepage').fadeIn();
  }

  module.homeView = homeView;
})(app);
