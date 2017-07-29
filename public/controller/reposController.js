'use strict';

var app = app || {};

(function(module) {
  var myRepos = {};

  module.myReposController = function(ctx, next) {
    $('.my-repos').empty();
    module.displayMyRepos(ctx.repos);
    $('.my-repos').show();
    next();
  }

  module.mySingleRepoController = function(ctx, next) {
    $('article').fadeOut();
    $('.homepage').fadeOut();
    module.displayMyRepos(ctx.repos);
    $('.my-repos').fadeIn();
    next();
  }
  module.myRepos = myRepos;
})(app);
