import './css/styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
// Webpack - Created app.js to load app.module before app.config. Otherwise module 'app' was nto found
import './app.module';
import './app.config';
import './movie-list/movie-list.module';
import './movie-list/movie-list.component';
import './movie-list/movie-list.component.spec';
// Webpack - Add 'file-loader' set on '.html$' files to load template
import './movie-list/movie-list.template.html';
