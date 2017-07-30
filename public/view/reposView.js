'use strict';

var app = app || {};

(function(module){
  module.displayMyRepos = function(myRepos){
    var reposTemplate = Handlebars.compile($('#reposTemplate').html());
    console.log('myRepos in displayMyRepos function in reposView.js is: ' + myRepos);
    console.log('==============================');
    $('.my-repos').append(reposTemplate({repos: myRepos}));
  }
})(app);
