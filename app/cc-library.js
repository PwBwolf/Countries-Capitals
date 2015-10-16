angular.module('ccLibrary', [])
  
  .constant('CC_API_PREFIX', 'http://api.geonames.org')
  .constant('CC_COUNTRIES', '/countryInfoJSON?username=pwborodich')
  .constant('CC_NEIGHBOURS_PATH', '/neighboursJSON?geonameId={{ id }}&username=pwborodich')
  .constant('CC_COUNTRY_DETAILS', '/searchJSON?country={{ id }}&name={{ name }}&q=capital of a political entity&isNameRequired=true&maxRows=10&username=pwborodich')
 

  // .factory('ccRequest', function ($http, $q, CC_API_PREFIX) {
  //   return function(path) { //insert the rest of the path on the prefix 
  //     $http.get(CC_API_PREFIX + path)
  //       .then(function(response) {
  //         console.log(response.data)
  //         return response.data;
  //       })
  //   }
  // })


  .factory('ccRequest', function ($http, $q, CC_API_PREFIX) {
    return function(path) { //insert the rest of the path on the prefix 
      var defer = $q.defer();
      $http.get(CC_API_PREFIX + path)
        .success(function(data) {
          defer.resolve(data);
        })
      return defer.promise;
    }
  })

  .factory('ccAllCountries', function (ccRequest, CC_COUNTRIES) {
    return function () {
      var path = CC_COUNTRIES
      return ccRequest(path);
    }
  })

  .factory('ccNeighbors', function (ccRequest, $interpolate, CC_NEIGHBOURS_PATH) {
    return function (neighbors) {
      var path = $interpolate(CC_NEIGHBOURS_PATH)({
        id: neighbors
      });
      return ccRequest(path);
    }
  })

  .factory('ccSearcher', function (ccRequest, CC_COUNTRY_DETAILS, $interpolate) {
    return function (country , name) {
      var path = $interpolate(CC_COUNTRY_DETAILS)({
        id: country,
        name: name
      })
      return ccRequest(path);
    }
  })