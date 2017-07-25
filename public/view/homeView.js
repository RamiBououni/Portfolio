'use strict';

var app = app || {};

(function(module) {

  var homeView = {};
  homeView.initHomePage = function() {
    $('.homepage').fadeIn();
    $('.aboutMe').fadeOut();
    $('article').fadeOut();
  }

  module.homeView = homeView;
})(app);
