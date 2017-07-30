'use strict';

var app = app || {};

(function(module){
  var aboutView = {};

  aboutView.initAboutPage = function() {
    $('article').fadeOut();
    $('.homepage').fadeOut();
    $('#repos').fadeOut();
    $('.aboutMe').fadeIn();
  }

  module.aboutView = aboutView;
})(app);
