viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries", {
    
    templateUrl : "countries/countries.html",
    controller : 'CountryCtrl'
  });
}]);

viewsModule.controller('CountryCtrl', function($scope) {
  $scope.test = "List of all countries"
});