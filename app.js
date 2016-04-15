angular.module('libraryApp', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/index.html',
      controller:  'BooksIndexController',
      controllerAs:'BooksIndexCtrl'
    })
    .when('/:id', {
      templateUrl: 'templates/books/show.html',
      controller:  'AlbumsShowController',
      controllerAs:'BooksShowCtrl'
    })
    /* Include the additional route here! */
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
