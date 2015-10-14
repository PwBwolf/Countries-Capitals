

angular.module('ccApp', ['appViews', 'ngRoute'])


.config(['$locationProvider', '$routeProvider', function($locationProvider, $rotueProvider) {
  $locationProvider.hashPrefix('!');
  $rotueProvider.otherwise({
    redirectTo: '/'
  })
}])

