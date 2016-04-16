angular.module('libraryApp')
       .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' +$routeParams.id
    }).then(function successCallback(response) {
      console.log(response);
      vm.book = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

    vm.editBook = function (book) {
        console.log("HERE'S MY BOOK!!!!!", book);
      $http({
        method: 'PUT',
        url: 'https://super-crud.herokuapp.com/books/' + book._id,
        data: book
      }).then(function successCallback(json) {
        console.log(json);
      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    };

    vm.deleteBook = function (book) {
      console.log(book);
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' +book._id,
      }).then(function successCallback(json) {
        console.log("deleted");
        $location.path('/');
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };

  }
