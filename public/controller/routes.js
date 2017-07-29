'use strict';

page('/', app.homeView.initHomePage);

page('/about', app.aboutView.initAboutPage);

page('/portfolio', app.portfolioView.initPortfolioPage);

page('/repos', app.myReposController);

page('/repos/:name', app.getMyRepoByName, app.myReposController);

page();
