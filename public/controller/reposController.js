'use strict';

var app = app || {};

(function(module) {
  var myRepos = {};

  myRepos.myReposController = function(ctx, next) {
    $('#myRepos').empty();
    $('.aboutMe').fadeOut();
    $('article').fadeOut();
    $('.homepage').fadeOut();
    module.displayMyRepos(ctx.repos);
    $('#myRepos').show();
    next();
  }

  myRepos.mySingleRepoController = function(ctx, next) {
    $('article').fadeOut();
    $('.homepage').fadeOut();
    module.displayMyRepos(ctx.repos);
    $('#myRepos').fadeIn();
    next();
  }
  module.myRepos = myRepos;
})(app);
