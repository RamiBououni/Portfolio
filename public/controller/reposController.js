'use strict';

var app = app || {};

(function(module){
  module.myReposController = function() {
    module.getMyRepos(function(myRepos){
      module.displayMyRepos(myRepos);
    })
    $('article').fadeOut();
    $('.homepage').fadeOut();
    $('.repos').fadeIn();
  }


})(app);
