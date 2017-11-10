'use strict';

import './toolbox/css/styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngMocks from 'angular-mocks';

//Load App module
import './app.module';
//Load Routes Config file
import './app.config';

//Components

//Load Root component
import './components/app-root/app-root.module';
import './components/app-root/app-root.component.js';
// import './components/app-root/app-root.component.spec';
import './components/app-root/app-root.template.html';

// Load Movie-list
import './components/movie-list/movie-list.module';
import './components/movie-list/movie-list.component';
// import './components/movie-list/movie-list.component.spec';
import './components/movie-list/movie-list.template.html'; // Webpack - Add 'file-loader' set on '.html$' files to load template
