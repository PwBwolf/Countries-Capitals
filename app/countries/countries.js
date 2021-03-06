viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries", {
    templateUrl : "countries/countries.html",
    controller : 'CountryCtrl'
  });
}]);

viewsModule.controller('CountryCtrl', function($scope, $location, ccAllCountries) {
  $scope.countries;
  ccAllCountries()
    .then(function(result) {
      $scope.countries = result.geonames
    })
  
});