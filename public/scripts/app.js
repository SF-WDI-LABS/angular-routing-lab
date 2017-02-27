angular
  .module('bookly', ['ngRoute'])
  .config(config)

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books-index.html',
      controller: 'BooksIndexController',
      controllerAs: 'bic'
    })
    .when('/books/:id', {
      templateUrl: '../templates/books-show.html',
      controller: 'BooksShowController',
      controllerAs: 'bsc'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
