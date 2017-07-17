'use strict'

var myProjects = [];

function Portfolio(portfolioObj){
  this.title = portfolioObj.title,
  this.image = portfolioObj.image,
  this.link = portfolioObj.link,
  this.description = portfolioObj.description;
}

Portfolio.prototype.toHtml = function() {
  var portofolioTemplatedString = $('#portfolioTemplate').html();
  var compiled = Handlebars.compile(portofolioTemplatedString);
  var html = compiled(this);
  return html;
};


portfolioObjets.forEach(function(articleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  myProjects.push(new Portfolio(articleObject));
});

myProjects.forEach(function(article) {
  $('#projects').append(article.toHtml());
});

//initially hide the about me and portfolio section
$('.aboutMe').hide();
$('article').hide();


$('#about').on('click', function(){
  $('article').fadeOut();
  $('.homepage').fadeOut();
  $('.aboutMe').fadeIn();
});

$('#home').on('click', function(){
  $('.homepage').fadeIn();
  $('.aboutMe').fadeOut();
  $('article').fadeOut();
});

$('#portfolio').on('click', function(){
  $('article').fadeIn();
  $('.aboutMe').fadeOut();
  $('.homepage').fadeOut();
});
