const openDialog = document.querySelector(".openDialog");
const dialog = document.querySelector(".dialog");
const closeDialog = document.querySelector(".close");
const newBook = document.querySelector(".submit");

const bookName = document.getElementById("bookName");
const authorName = document.getElementById("authorName");
const noPages = document.getElementById("pages");

const cards = document.querySelector(".cards");

openDialog.addEventListener("click", function () {
  dialog.showModal();
});

closeDialog.addEventListener("click", function () {
  dialog.close();
});

const myLib = [];

function Book(bName, aName, Pages, YN) {
  this.bookName = bName;
  this.authorName = aName;
  this.noPages = Pages;
  this.readStatus = YN;
}

function addBook(bName, aName, pages, yn) {
  var newBook = new Book(bName, aName, pages, yn);
  myLib.push(newBook);
  displayBook(newBook);
}

function displayBook(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  bookCard.innerHTML = `
  <h4>${book.bookName}</h4>
    <h6>${book.authorName}</h6>
    <p>Pages: ${book.noPages}</p>
    <p>Read Yet? ${book.readStatus}</p>
    `;
  cards.appendChild(bookCard);
}

newBook.addEventListener("click", function () {
  const readStatus = document.querySelector('input[name="readYet"]:checked');

  addBook(bookName.value, authorName.value, noPages.value, readStatus.value);

  bookName.value = "";
  authorName.value = "";
  noPages.value = "";
  dialog.close();
});

bookName.addEventListener('input', function(ele){
  bookName.setCustomValidity('');
  if(!bookName.validity.valid){
    
  }
})