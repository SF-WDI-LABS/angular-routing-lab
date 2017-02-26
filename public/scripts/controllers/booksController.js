angular
  .module("booksApp")
  .controller("BooksController", BooksController);

BooksController.$inject = ['$http', '$routeParams'];
function BooksController(   $http,   $routeParams) {
 var vm = this;
 console.log("BOOK controller!") 
 vm.books = [];
 vm.editBook = {}
 vm.submit = function(){
  console.log("book", vm.editBook);
  $http({
    method: "PUT",
    url: "https://super-crud.herokuapp.com/books/" + vm.editBook._id,
    data: vm.editBook
  }).then(function(res){
    console.log("success!");
    console.log(res.data);
  })
 }
 $http({
  method: "GET",
  url: "https://super-crud.herokuapp.com/books",
 }).then(function Success(json){
  vm.books = json.data.books;
  console.log("loging")
 })
}