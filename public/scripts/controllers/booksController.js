angular
  .module("booksApp")
  .controller("BooksController", BooksController);

BooksController.$inject = ['$http', '$routeParams'];
function BooksController(   $http,   $routeParams) {
 var vm = this;
 console.log("BOOK controller!") 
 vm.books = [];
 vm.editBook = {
  title: "",
  image: "",
  author: "",
  releaseDate: "",
 }
 vm.makeEdit = function(book){
  for(key in vm.editBook){
    vm.editBook[key] = book[key]
  }
 }
 vm.submit = function(book){
  var index = vm.books.indexOf(book);
  console.log(index);
  $http({
    method: "PUT",
    url: "https://super-crud.herokuapp.com/books/" + book._id,
    data: vm.editBook
  }).then(function(res){
    console.log("success!");
    vm.books[index] = res.data;
  })
 }
 $http({
  method: "GET",
  url: "https://super-crud.herokuapp.com/books",
 }).then(function Success(json){
  vm.books = json.data.books;
 })
}