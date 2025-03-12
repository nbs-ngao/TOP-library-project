const myLibrary = []

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


function displayEachBook2() {
    // loop through the array, display eac book
    /*for (let book in myLibrary ) {
        console.log(myLibrary[book].info());
    }*/
       // Assurer qu'on a un conteneur HTML où ajouter les livres
       const container = document.getElementById('bookContainer');
       //container.innerHTML = '';  // Vider le conteneur avant de rajouter les livres (si nécessaire)
   
       // Loop à travers le tableau de livres et afficher chaque livre
       myLibrary.forEach((book, index) => {
           // Créer un élément HTML pour chaque livre
           const bookCard = document.createElement('div');
           bookCard.classList.add('book-card');
           
           // Créer un titre pour le livre
           const title = document.createElement('h3');
           title.textContent = book.title;
           bookCard.appendChild(title);
           
           // Créer un auteur pour le livre
           const author = document.createElement('p');
           author.textContent = `Author: ${book.author}`;
           bookCard.appendChild(author);
           
           // Créer un nombre de pages
           const pages = document.createElement('p');
           pages.textContent = `Pages: ${book.pages}`;
           bookCard.appendChild(pages);
           
           // Créer un statut de lecture
           const readStatus = document.createElement('p');
           readStatus.textContent = `Status: ${book.read}`;
           bookCard.appendChild(readStatus);
           
           // Ajouter la carte du livre au conteneur
           container.appendChild(bookCard);
       });
}

addBookToLibrary("Le Dernier Voyage", "Alice Dupont", 350, "not read");
addBookToLibrary("L'Ombre de la Nuit", "Marc Lefevre", 420, "read");
addBookToLibrary("Les Secrets du Temps", "Clara Martin", 280, "not read");
addBookToLibrary("L'Évasion", "Pierre Durand", 300, "read");
addBookToLibrary("La Quête de l'Âme", "Sophie Lemoine", 510, "not read");
addBookToLibrary("Les Rives de l'Espoir", "Nicolas Moreau", 200, "read");
addBookToLibrary("Voyage au Centre de l'Univers", "Lucie Giraud", 450, "not read");
addBookToLibrary("La Fureur du Vent", "Julien Roux", 380, "read");
addBookToLibrary("Sous la Lune", "Emilie Chantal", 330, "not read");
addBookToLibrary("Le Mystère de l'Atlantide", "Antoine Bernard", 490, "read");

function displayEachBook() {
    for (let book in myLibrary ) {
        console.log(myLibrary[book].info());
    }

    const bookContainer = document.getElementById('bookContainer');

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

displayEachBook();