angular
  .module("booksApp")
  .controller("OneBookController",OneBookController);

OneBookController.$inject = ['$http', '$routeParams'];
function OneBookController(    $http,   $routeParams) {
  var vm = this;
  console.log("found A Book!");
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
    console.log(response.data)
    vm.book = response.data;
  })
  vm.makeCopy = function(book){
    for(key in vm.editBook){
      vm.editBook[key] = book[key]
    }
    console.log(vm.editBook);
  }
  vm.submit = function(book){
    $http({
      method: "PUT",
      url: "https://super-crud.herokuapp.com/books/" + book._id,
      data: vm.editBook
    }).then(function(res){
      console.log("success!");
      vm.book = res.data;
    })
  }
  vm.delete = function(){
    console.log("del");
    $http({
      method: "DELETE",
      url: "https://super-crud.herokuapp.com/books/" + vm.book._id
    }).then(function(res){
      console.log("BOOK WAS DELETED!", res.data);
    })
  }
}