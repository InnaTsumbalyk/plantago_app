angular.module('app.services', ['ngResource'])

  .factory('Info', function($resource, $rootScope) {
    return $resource('http://46.101.206.45/info.json',
        {lat: '@lat', lng: '@lng' },
        {
          get:  {
            method: 'GET'
          }
        }
    );
  })

  .factory('Clinics', function($resource, $rootScope) {
    return $resource('http://46.101.206.45/clinics.json',
        {lat: '@lat', lng: '@lng' },
        {
          get:  {
            method: 'GET'
          }
        }
    );
  })

;
