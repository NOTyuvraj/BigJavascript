// console.log("It F***ing runs !");

// function Book(title,author,pages,readYet){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readYet = readYet; 
//     if(this.readYet === true){
//         var ans = "already read it";
//     }else{
//         var ans = "not read yet";
//     }
//     this.info = function(){
//         return this.title + " by " + this.author + " , " + this.pages + ", " + ans; 
//     }
// }

// const books = new Book("Prim" , "Me" , 1 , true);
// console.log(books.info());


function Hero(name,level){
    this.name = name;
    this.level = level;
}

const hero1 = new Hero("Sova" , 999);

Hero.prototype.greet =function (){
    return`${this.name} says Hello!`;
}

console.log(hero1.greet());
console.log(Hero.prototype);