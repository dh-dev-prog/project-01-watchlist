// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';
import './src/app.loader'; //test wont work without loading all elements here

const context = require.context('./src', true, /\.spec.js$/);

context.keys().forEach(context);
