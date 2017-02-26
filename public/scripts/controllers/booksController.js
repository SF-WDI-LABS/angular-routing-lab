angular
  .module("booksApp")
  .controller("BooksController", BooksController);

BooksController.$inject = ['$http', '$routeParams'];
function BooksController(   $http,   $routeParams) {
 var vm = this;
 console.log("BOOK controller!") 
 vm.books = [];
 $http({
  method: "GET",
  url: "https://super-crud.herokuapp.com/books",
 }).then(function Success(json){
  vm.books = json.data.books;
 })
}