'use strict';

var app = app || {};

(function(module) {

  module.getMyRepos = function(ctx, next) {
    $.ajax({
      url: '/github/user/repos?affiliation=owner',
      method: 'GET'
    })
    .then(
        function(data) {
          var filteredData = data.map(repos =>({
            name: repos.name,
            url: repos.html_url
          }));
          ctx.repos = filteredData;
          next();
        }
      );
  };


  module.getMyRepoByName = function(ctx, next) {
    $.ajax({
      url: `/github/repos/RamiBououni/${ctx.params.name}`,
      method: 'GET'
    })
    .then(
      function (data) {
        ctx.repos = [data];
        next();
      }
    );
  }
})(app);
