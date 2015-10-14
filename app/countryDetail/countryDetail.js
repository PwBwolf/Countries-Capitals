viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/country/id", {
    templateUrl : "countryDetail/countryDetail.html",
    controller : 'CountryDetailCtrl'
  });
}]);

viewsModule.controller('CountryDetailCtrl', function($scope) {
  $scope.test = "details page test past"
});
