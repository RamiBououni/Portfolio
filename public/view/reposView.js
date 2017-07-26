'use strict';

var app = app || {};

(function(module){
  var reposView = {};

  reposView.initReposPage = function() {
    $('article').fadeOut();
    $('.homepage').fadeOut();
    $('.aboutMe').fadeOut();
    $('.repos').fadeIn();
  }

  module.aboutView = reposView;
})(app);
