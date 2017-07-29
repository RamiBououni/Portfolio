'use strict';

var app = app || {};

(function(module) {

  module.getMyRepos = function(ctx, next) {
    $.get({
      url: `/github/user/repos?affiliation=owner`,
    })
    .then(
        function(data) {
          var filteredData = data.map(function(repos) {
            var dataObj = {
              name: repos.name,
              url: repos.html_url
            }
            return dataObj
          });
          ctx.repos = filteredData;
          next();
        }
      );
  };


  module.getMyRepoByName = function(ctx, next) {
    $.get({
      url: `github/repos/RamiBououni/${ctx.params.name}`,
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
