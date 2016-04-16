angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(onSuccess, onError);
  function onSuccess(response){
    vm.books = response.data.books;
    console.log(response.data.books);
  }
  function onError(error){
    console.log('error founddd noooo');
  }

}
