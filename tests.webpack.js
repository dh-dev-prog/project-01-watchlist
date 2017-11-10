// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular'; // Needed for angular-mocks to work
import 'angular-mocks/angular-mocks'; // Needed to use the mock method
import './src/app.loader'; //Need to load all modules before testing. tests wont work without loading all elements here

const context = require.context('./src', true, /\.spec.js$/);

context.keys().forEach(context);
