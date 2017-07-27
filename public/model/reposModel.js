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
})(app);
