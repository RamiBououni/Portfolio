'use strict';

var app = app || {};

(function(module) {
  var myRepos = {};

  myRepos.myReposController = function(ctx, next) {
    // $('.my-repos').empty();
    $('.aboutMe').fadeOut();
    $('article').fadeOut();
    $('.homepage').fadeOut();
    module.displayMyRepos(ctx.repos);
    $('#repos').fadeIn();
    // $('.my-repos').show();
    next();
  }

  myRepos.mySingleRepoController = function(ctx, next) {
    $('article').fadeOut();
    $('.homepage').fadeOut();
    module.displayMyRepos(ctx.repos);
    $('.my-repos').fadeIn();
    next();
  }
  module.myRepos = myRepos;
})(app);
