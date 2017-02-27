angular
  .module("booksApp")
  .controller("OneBookController",OneBookController);

OneBookController.$inject = ['$http', '$routeParams', '$location'];
function OneBookController(   $http,   $routeParams,   $location) {
  var vm = this;
  vm.book = {};
  vm.editBook = {
    title: "",
    image: "",
    author: "",
    releaseDate: "",
  }
  $http({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books/" + $routeParams.id,
  }).then(function Success(response){
    vm.book = response.data;
  })
  vm.makeCopy = function(book){
    for(key in vm.editBook){
      vm.editBook[key] = book[key]
    }
  }
  vm.submit = function(book){
    $http({
      method: "PUT",
      url: "https://super-crud.herokuapp.com/books/" + book._id,
      data: vm.editBook
    }).then(function(res){
      vm.book = res.data;
      $location.path('/');
    })
  }
  vm.delete = function(){
    $http({
      method: "DELETE",
      url: "https://super-crud.herokuapp.com/books/" + vm.book._id
    }).then(function(res){
      $location.path('/');
    })
  }
}