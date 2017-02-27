angular
  .module('bookly')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
function BooksShowController (  $http,   $routeParams,   $location  ) {
  var vm = this;
  var bookId = $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ bookId
  }).then(function successCallback(json) {
    vm.book = json.data;
  });

  vm.updateBook = function(book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + book._id,
      data: {
        title: book.title,
        author: book.author,
        image: book.image,
        releaseDate: book.releaseDate
      }
    }).then(function successBookUpdate(json) {
      vm.book = json.data;
      $location.path('/');
    });
  }

  vm.deleteBook = function(book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + book._id
    }).then(function successBookDelete(json) {
      $location.path('/');
    });
  }
}
