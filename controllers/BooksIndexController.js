angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];
function BooksIndexController ($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(onBookIndexSuccess, onError)

  function onBookIndexSuccess(response){
    console.log('her\'s the get all books response data', response.data);
    vm.books = response.data.books;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
};
