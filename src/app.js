'use strict';

import './css/styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
// Webpack - Created app.js to load app.module before app.config. Otherwise module 'app' was nto found
import './app.module';
import './app.config';

//Load main component
import './app-root/app-root.module';
import './app-root/app-root.component.js';
// import './app-root/app-root.component.spec';
import './app-root/app-root.template.html';

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
