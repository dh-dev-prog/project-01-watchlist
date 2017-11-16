'use strict';

import './toolbox/css/styles.scss';

//img - need to require all images recursivly
var requireImg = require.context('./toolbox', true, /\.jpg$/);
requireImg.keys().forEach(requireImg);

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';

// var requireComponents = require.context('./components', true, /\.js$/);
// requireComponents.keys().forEach(requireComponents);

// Load App module
import './app.module';
//Load Routes Config file
import './app.config';

//Components

// var cache = {};
// function importAll (r) {
//   r.keys().forEach(key => cache[key] = r(key));
// }
// importAll(require.context('./components/', true, /\.js$/));
//


//Load Root component
import './components/app-root/app-root.module';
import './components/app-root/app-root.component.js';
// import './components/app-root/app-root.component.spec';
import './components/app-root/app-root.template.html';
//
// // Load Movie-list
import './components/movie-list/movie-list.module';
import './components/movie-list/movie-list.component';
// import './components/movie-list/movie-list.component.spec';
import './components/movie-list/movie-list.template.html'; // Webpack - Add 'file-loader' set on '.html$' files to load template
//
// // Load watchlist component
import './components/watchlist/watchlist.module';
import './components/watchlist/watchlist.component';
import './components/watchlist/watchlist.template.html'; // Webpack - Add 'file-loader' set on '.html$' files to load template
//
// // Load watched component
import './components/watched/watched.module';
import './components/watched/watched.component';
import './components/watched/watched.template.html'; // Webpack - Add 'file-loader' set on '.html$' files to load template
