viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries/:country/:capital", {
    templateUrl : "countryDetail/countryDetail.html",
    controller : 'CountryDetailCtrl',
    resolve : {
      countryDetails : [
        'ccSearcher',
        '$route', 
        function (ccSearcher, $route) {
          return ccSearcher($route.current.params.country, $route.current.params.capital)
        },
        
      ],
      neighborDetails :[
        'ccNeighbors',
        '$route', 
        function (ccNeighbors, $route) {
          return ccNeighbors($route.current.params.country)
        }
      ]
    }
  });
}]);

viewsModule.controller('CountryDetailCtrl', function ($scope, countryDetails) {
  var countryID = countryDetails.geonames[0].countryCode;
  var lowerC = countryID.toLowerCase();
  var upperC = countryID.toUpperCase();

  $scope.capital = countryDetails.geonames[0];
  $scope.lowerC = lowerC
  $scope.upperC = upperC
 

});
