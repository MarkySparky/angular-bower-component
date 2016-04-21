/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('myApp', [
    'ionic', 'ngSanitize', 'ngAnimate', 'ui.router', //additional angular modules
    'StandardLife.angular-component'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    /**
    setup - whitelist, appPath, html5Mode
    @toc 1.
    */

    // var staticPath ='/';
    var staticPath;
    // staticPath ='/angular-directives/angular-component/';		//local
    //staticPath ='/';		//nodejs (local)
    staticPath = '/angular-bower-component/'; //gh-pages
    var appPathRoute = '/';
    var pagesPath = staticPath + 'pages/';


var homeState = appPathRoute + 'home';
$stateProvider
    .state(homeState, {
      url: '/home',
      templateUrl: pagesPath + 'home/home.html'
    });

	$urlRouterProvider.otherwise(appPathRoute + 'home' );

}]);
