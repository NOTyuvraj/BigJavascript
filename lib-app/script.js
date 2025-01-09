// const myLib = [];

// class Books{
//     constructor(name , author , pages , read){
//         this.name = name,
//         this.author = author,
//         this.pages = pages,
//         this.read = read
//     }
// }

// const b1 = new Books("the book" , "author" , 125 , 0);
// const b2 = new Books("a book" , "writer" , 25 , 1);

// myLib.push(b1);
// myLib.push(b2);

// myLib.forEach(ele => {
//     console.log(ele)
// });

const dialog = document.getElementById("add-book-dialog");
const openDialog = document.getElementById("new-book-btn");
const closeDialog = document.getElementById("close-btn");

openDialog.addEventListener('click' , function(){
    dialog.showModal();
})

closeDialog.addEventListener('click' , function(){
    dialog.close();
})