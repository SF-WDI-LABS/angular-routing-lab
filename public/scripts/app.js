angular
  .module("booksApp", ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,   $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books.html',
      controller: 'BooksController',
      controllerAs: 'bc'
    })
    .when('/books/:id',{
      templateUrl: '/templates/onebook.html',
      controller: 'OneBookController',
      controllerAs: 'obc'
    })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}