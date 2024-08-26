import React, { useEffect, useState } from 'react';
import Book from './Book'; // Import the Book component

const BookList = () => {
    const [books, setBooks] = useState([]); // Initialize state to store the list of books

    // useEffect hook runs when the component mounts
    useEffect(() => {
        // Fetch books from the backend API
        fetch('/api/books/')
            .then(response => response.json()) // Convert the response to JSON
            .then(data => setBooks(data));     // Update the state with the fetched data
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <h1>Book List</h1>
            {books.map(book => (
                <Book key={book.id} book={book} /> // Render a Book component for each book
            ))}
        </div>
    );
};

export default BookList;
