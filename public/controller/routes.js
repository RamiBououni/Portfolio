'use strict';

page('/', app.homeView.initHomePage);

page('/about', app.aboutView.initAboutPage);

page('/portfolio', app.portfolioView.initPortfolioPage);

page('/repos', app.getMyRepos, app.myRepos.myReposController);

// page('/repos/:name', app.getMyRepoByName, app.myRepos.mySingleRepoController);

page();
