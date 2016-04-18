angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ $routeParams.id
  }).then(onSuccess);
  function onSuccess(response){
    vm.book = response.data;
  }

  vm.deleteBook = function(book) {
    console.log('deleting book', book);
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
      }).then(onDeleteBookSuccess);
      function onDeleteBookSuccess(response){
        console.log('delete response data:', response.data);
        $location.path('/');
      }

  };

vm.updateBook = function(book){
  console.log('update book', updateBook);
  $http({
    method: 'PUT',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
    data: {
      title: updateBook.title,
      author: updateBook.author,
      image: updateBook.image,
      releaseDate: updateBook.releaseDate
    }
    }).then(onUpdateBookSuccess);

    function onUpdateBookSuccess(response){
      console.log('updated book', bookId, ':', response.data);
      vm.book = response.data;
      $location.path('/');
    }
  };
}
