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
          var filteredData = data.map(function(repos) {
            var dataObj = {
              name: repos.name,
              url: repos.html_url
            }
            return dataObj
          });
          ctx.repos = filteredData;
          console.log('ctx.repos in getMyRepos function in reposModel.js is: ' + ctx.repos);
          console.log('==============================');
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
        console.log('ctx.repos in getMyRepoByName function in reposModel.js is: ' + ctx.repos);
        console.log('==============================');
        next();
      }
    );
  }
})(app);
