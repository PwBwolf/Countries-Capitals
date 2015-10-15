angular.module('ccLibrary', [])
  
  .constant('CC_API_PREFIX', 'http://api.geonames.org')
  .constant('CC_COUNTRIES', '/countryInfo?username=pwborodich')
  .constant('CC_NEIGHBOURS_PATH', '/neighbours?geonameId={{ id }}&username=pwborodich')
  .constant('CC_COUNTRY_DETAILS', '/searchJSON?country={{ id }}&maxRows=10&username=pwborodich')

  .factory('ccRequest', function ($http, $q, CC_API_PREFIX) {
    return function(path) { //insert the rest of the path on the prefix 
      return $http.get(CC_API_PREFIX + path)
        .then(function(response) {
          return response.data;
        })
    }
  })

  .factory('ccAllCountries', function (ccCountries) {
    return function () {
      var path = ccCountries
      return ccRequest(path);
    }
  })

  .factory('ccNeighbors', function (ccCountries, $interpolate, CC_NEIGHBOURS_PATH) {
    return function (neighbors) {
      var path = $interpolate(CC_NEIGHBOURS_PATH)({
        id: neighbors
      });
      return ccRequest(path);
    }
  })

  .factory('ccSearcher', function (ccCountries, CC_COUNTRY_DETAILS, $interpolate) {
    return function (country) {
      var path = $interpolate(CC_COUNTRY_DETAILS)({
        id: country
      })
      return ccRequest(path);
    }
  })