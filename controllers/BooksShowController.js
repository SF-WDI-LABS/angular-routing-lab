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

    function onDeleteBookSuccess(response) {
      console.log('delete response data:', response.data);
      $location.path('/');
    }

  };

vm.editBook = function(book) {
  console.log('edit book', editBook);
  $http({
    method: 'PUT',
    url: 'https://super-crud.herokuapp.com/books/' + editBook._id,
    data: {
      image: editBook.image,
      title: editBook.title,
      author: editBook.author,
      releaseDate: editBook.releaseDate
    }

  }).then(onEditBookSuccess);

  function onEditBookSuccess(response) {
    console.log('edit book', bookId, ':', response.data);
    vm.book = response.data;
    $location.path('/');
  }
};
}
