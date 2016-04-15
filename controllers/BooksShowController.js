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
        console.log(book);
      $http({
        method: 'PU',
        url: 'https://super-crud.herokuapp.com/books/' +book.id,
        data: book
      }).then(function successCallback(json) {
      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    };

    vm.deleteAlbum = function () {
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' +$routeParams.id,
      }).then(function successCallback(json) {
        var index = vm.albums.indexOf(album);
        vm.albums.splice(index,1);
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };

  }
