function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.info = function() {
    if (this.pages.length === 295) {
    return this.title + ' by ' + this.author +', ' + this.pages + ' is read' 
} else {
    return this.title + ' by ' + this.author +', ' + this.pages + ' not read yet'
}
}

let theHobbit = new Book ('The Hobbit', 'J.R.R. Tolkien', 295)
console.log(theHobbit.info())


//i tried to use this method you taught us in the last meeting, below, but couldnt get the syntax at all so i left it like that totally messed up

/*class Book {
    constructor(title, author, pages) {
        this.tile = title;
        this.author = author;
        this.pages = pages;

    }
}
*/