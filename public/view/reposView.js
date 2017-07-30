'use strict';

var app = app || {};

(function(module){
  module.displayMyRepos = function(myRepos){
    var reposTemplate = Handlebars.compile($('#reposTemplate').html());
    $('#myRepos').append(reposTemplate({repos: myRepos}));
  }
})(app);
