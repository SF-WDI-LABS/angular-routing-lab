angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response){
    console.log('got back response', response);
    vm.books = response.data;
  }, function errorCallback(response){
    console.log('error getting back data', response);
  });
}
