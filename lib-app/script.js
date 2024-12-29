const myLib = [];

function Book(name,author){
    this.name = name;
    this.author = author;
    this.addBook = function(){
        return `{book: ${this.name} , author: ${this.author}}`;
    }
}

function addBookToLib(name , author){
    const newBook = new Book(name,author);
    myLib.push(newBook.addBook());
}

addBookToLib("Raze" , "Author");
addBookToLib("Raze1" , "Author 1");

myLib.forEach(ele => {
    console.log(ele);
});