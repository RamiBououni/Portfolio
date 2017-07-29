'use strict';

var app = app || {};

(function(module) {

  module.getMyRepos = function(callback) {
    $.get({
      url: `github/user/repos`,
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
          callback(filteredData);
        }
      );
  };


  module.getMyRepoByName = function(ctx, next) {
    $.get({
      url: `github/repos/ramibououni/${ctx.params.name}`,
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
