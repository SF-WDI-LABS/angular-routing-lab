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
}
