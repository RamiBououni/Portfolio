'strict mode'

var articles = [];

function Portfolio(portfolioObj){
  this.title = portfolioObj.title,
  this.image = portfolioObj.image,
  this.link = portfolioObj.link,
  this.description = portfolioObj.description;
}

Portfolio.prototype.toHtml = function() {

  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  $newArticle.find('h1').text(this.title);
  $newArticle.append(this.image);
  $newArticle.find('a').text('Link to my Github').attr('href', this.link);
  $newArticle.find('p').html(this.description);


  $newArticle.append('<hr>');
  return $newArticle;
};


portfolioObjets.forEach(function(articleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  articles.push(new Portfolio(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
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
