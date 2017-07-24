'use strict';

(function() {
  var myProjects = [];

  function Portfolio(portfolioObj) {
    this.title = portfolioObj.title,
      this.image = portfolioObj.image,
      this.link = portfolioObj.link,
      this.description = portfolioObj.description;
  }

  Portfolio.all = [];

  Portfolio.prototype.toHtml = function() {
    var portofolioTemplatedString = $('#portfolioTemplate').html();
    var compiled = Handlebars.compile(portofolioTemplatedString);
    var html = compiled(this);
    return html;
  };

  Portfolio.loadIt = function(rawdata) {
    rawdata.forEach(function(element) {
      Portfolio.all.push(new Portfolio(element));
    })
  }

  function initPage() {
    Portfolio.all.map(function(article) {
      return $('#projects').append(article.toHtml());
    });
  }

  Portfolio.fetchData = function() {
    if (localStorage.rawdata) {
      Portfolio.loadIt(JSON.parse(localStorage.getItem('data')));
      initPage();
    } else {
      var location = './../data/portfolio.json';
      $.getJSON(location).then(function functionSuccess(data) {
        var stringfiedData = JSON.stringify(data);
        localStorage.setItem('data', stringfiedData);
        var parsedData = JSON.parse(stringfiedData);

        Portfolio.loadIt(parsedData);
        initPage();

      }, function functionError(err) {
        console.error(err);
      })
    }
  }

  var luckyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(sum, total) {
    return Math.floor(Math.random() * (sum + total));
  });

  $('.lucky-number h2').append(luckyNumber);

  //initially hide the about me and portfolio section
  $('.aboutMe').hide();
  $('article').hide();

  $('#about').on('click', function() {
    event.preventDefault();
    $('article').fadeOut();
    $('.homepage').fadeOut();
    $('.aboutMe').fadeIn();
  });

  $('#home').on('click', function() {
    event.preventDefault();
    $('.homepage').fadeIn();
    $('.aboutMe').fadeOut();
    $('article').fadeOut();
  });

  $('#portfolio').on('click', function() {
    event.preventDefault();
    $('article').fadeIn();
    $('.homepage').fadeOut();
    $('.aboutMe').fadeOut();
  });
  Portfolio.fetchData();
})();
