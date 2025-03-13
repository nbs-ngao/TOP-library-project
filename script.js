const myLibrary = [];

function Book(title, author, pages, read) {
    // book constructor
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}.`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Add initial books
addBookToLibrary("Le Dernier Voyage", "Alice Dupont", 350, "not read");
addBookToLibrary("L'Ombre de la Nuit", "Marc Lefevre", 420, "read");
addBookToLibrary("Les Secrets du Temps", "Clara Martin", 280, "not read");

function displayBooks() {
    const bookContainer = document.getElementById('bookContainer');
    // Clear the container first to avoid duplicates
    bookContainer.innerHTML = '';
    
    for (const book of myLibrary) {
        // ajout carte pour chaque livre
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        // ajout du titre
        const titleEl = document.createElement('h3');
        titleEl.textContent = book.title;
        bookCard.appendChild(titleEl);
        
        // ajout auteur
        const authorEl = document.createElement('p');
        authorEl.textContent = `Author: ${book.author}`;
        bookCard.appendChild(authorEl);
        
        // ajout nombre de pages
        const pagesEl = document.createElement('p');
        pagesEl.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pagesEl);
        
        // ajout statut lecture
        const statusEl = document.createElement('p');
        statusEl.textContent = `Status: ${book.read}`;
        bookCard.appendChild(statusEl);
        
        bookContainer.appendChild(bookCard);
    }
}

function setupEventListeners() {
    const dialogEl = document.querySelector("dialog");
    const addBookEl = document.querySelector("dialog + button");
    const closDialogEl = document.querySelector("dialog button");
    
    // "Add Book" button opens the dialog modally
    addBookEl.addEventListener("click", () => {
        dialogEl.showModal();
    });
    
    // "Cancel" button closes the dialog
    closDialogEl.addEventListener("click", () => {
        dialogEl.close();
    });
    
    const submitBtnEl = document.getElementById('submitBtn');
    submitBtnEl.addEventListener('click', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').value;
        
        addBookToLibrary(title, author, pages, read);
        dialogEl.close();
        
        // Display books after adding a new one
        displayBooks();
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
    setupEventListeners();
});