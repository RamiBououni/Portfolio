'use strict';

var app = app || {};

(function(module) {
  var myRepos = {};

  module.myReposController = function() {
    module.getMyRepos(function(myRepos) {
      module.displayMyRepos(myRepos);
    })
    $('article').fadeOut();
    $('.homepage').fadeOut();
    $('.my-repos').fadeIn();
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
