angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+ $routeParams.id
  }).then(onSuccess);
  function onSuccess(response){
    console.log('here\'s the data for book', bookId, ':', response.data);
    vm.book = response.data;
  }
}
