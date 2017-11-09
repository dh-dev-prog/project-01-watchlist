'use strict';

import './css/styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
// Webpack - Created app.js to load app.module before app.config. Otherwise module 'app' was nto found
import './app.module';
import './app.config';

//Load main component
import './main-component/main-component.module';
import './main-component/main-component.component.js';
// import './main-component/main-component.component.spec';
import './main-component/main-component.template.html';

//Load the header
// import './header/header.module';
// import './header/header.component';
// import './header/header.component.spec';
// import './header/header.template.html';

// Load Movie-list
import './movie-list/movie-list.module';
import './movie-list/movie-list.component';
import './movie-list/movie-list.component.spec';
// Webpack - Add 'file-loader' set on '.html$' files to load template
import './movie-list/movie-list.template.html';
