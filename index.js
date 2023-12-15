function addBook() {
    const title = document.getElementById('bookTitle');
    const author = document.getElementById('authorName');

    const titleName = title.value;
    const authorName = author.value;

    if (titleName === '' || titleName === '') {
        alert('Please enter both book title and author name.');
        return;
    }


    let bookList = document.getElementById('bookList');

    let bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.innerHTML = '<span><strong>Title:</strong> ' + titleName + ', <strong>Author:</strong> ' + authorName + '</span>';

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'Delete';

    deleteButton.onclick = function () {
        bookList.removeChild(bookItem);
    
    };

    bookItem.appendChild(deleteButton);

    bookList.appendChild(bookItem);

    document.getElementById('bookTitle').value = '';
    document.getElementById('authorName').value = '';
}
