'use strict';

var app = app || {};

(function(module) {

  var portfolioView = {};

  portfolioView.initPortfolioPage = function() {
    $('article').fadeIn();
    $('.homepage').fadeOut();
    $('.aboutMe').fadeOut();
  }

  module.portfolioView = portfolioView;
})(app);
