angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books' + "/" + $routeParams.id,
  }).then(function callBackSuccess(response) {
    console.log('show success', response.data);
    vm.book = response.data;
  }, function callBackError(err) {
    console.log('Error getting response data', err);
  });

  vm.editBook = function(book){
    console.log('editing book', book);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books' + "/" + $routeParams.id,
      data: {
        title: book.title,
        author: book.author,
        releaseDate: book.releaseDate,
        image: book.image
      }
    }).then(function successEditCallBack(response) {
      console.log('edit success', response.data);
      $location.path('/');
    }, function errorEditCallBack(err) {
      console.log('Error editing response data', err);
    });
  };

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books' + "/" + $routeParams.id,
    }).then(function successDeleteCallback(response) {
      $location.path('/');
      console.log('delete success', response);
    }, function errorDeleteCallBack(err) {
      console.log('Error deleting response data', err);
    });
  };
}
