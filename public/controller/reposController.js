'use strict';

var app = app || {};

(function(module) {
  module.myReposController = function() {
    module.getMyRepos(function(ctx, next) {
      module.displayMyRepos(ctx.repos);

      $('article').fadeOut();
      $('.homepage').fadeOut();
      $('.repos').fadeIn();
      next();
    })
  }


})(app);
