angular
  .module('bookly')
  .controller('BooksIndexController', BooksIndexController);

var db = "https://super-crud.herokuapp.com/books"

BooksIndexController.$inject = ['$http'];
function BooksIndexController (  $http  ) {
  var vm = this;

  $http({
    method: 'GET',
    url: db
  }).then(function successCallback(response) {
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
}
