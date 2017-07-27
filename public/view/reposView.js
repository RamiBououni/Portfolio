'use strict';

var app = app || {};

(function(module){
  module.displayMyRepos = function(myRepos){
    var reposTemplate = Handlebars.compile($('#reposTemplate').html());
    $('.my-repos').append(reposTemplate({repos: myRepos}));
  }
})(app);
