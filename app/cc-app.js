angular.module('ccApp', ['appViews', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])


.config(['$locationProvider', '$routeProvider', function($locationProvider, $rotueProvider) {
  $locationProvider.hashPrefix('!');
  $rotueProvider.otherwise({
    redirectTo: '/'
  })
}])

