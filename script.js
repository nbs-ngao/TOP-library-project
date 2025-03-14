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
        bookCard.setAttribute('data-id', book.id);
        
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
        
        // ajout boutton supprimer
        const deleteBookEl = document.createElement('button');
        deleteBookEl.classList.add('deleteBtn');
        deleteBookEl.setAttribute('data-id', book.id);
        deleteBookEl.textContent = 'Delete';
        bookCard.appendChild(deleteBookEl);

        bookContainer.appendChild(bookCard);
    }
}

function deleteBookFromLibrary(idToDel) {
    const indexBookToDelete = myLibrary.findIndex(item => item.id === idToDel);
    
    if (indexBookToDelete !== -1) {
        // Optionnel : afficher l'info du livre avant suppression
        //alert(myLibrary[indexBookToDelete].info());
        
        // Supprimer le livre du tableau
        myLibrary.splice(indexBookToDelete, 1);
        
        // Réafficher tous les livres pour mettre à jour le DOM
        displayBooks();
        
        // Réattacher les écouteurs d'événements aux nouveaux boutons
        setupDeleteButtons();
    }
}

// Fonction séparée pour configurer les boutons de suppression
function setupDeleteButtons() {
    const deleteBookEl = document.querySelectorAll('.deleteBtn');
    
    deleteBookEl.forEach((button) => {
        button.addEventListener("click", function() {
            const idBookToDelete = this.dataset.id;
            deleteBookFromLibrary(idBookToDelete);
        });
    });
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
        
        // Configurer les boutons de suppression après mise à jour
        setupDeleteButtons();
    });

    // Configurer les boutons de suppression au chargement initial
    setupDeleteButtons();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
    setupEventListeners();
});