angular
  .module("booksApp")
  .controller("OneBookController",OneBookController);

OneBookController.$inject = ['$http', '$routeParams'];
function OneBookController(    $http,   $routeParams) {
  var vm = this;
  vm.book = {};
  console.log("found One Book!");
  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books/" + $routeParams.id,
  }).then(function Success(response){
    console.log(response.data)
    vm.book = response.data;
  })
}