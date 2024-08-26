import React from 'react';

const Book = ({ book }) => (
    <div>
        <h2>{book.title}</h2>        {/* Display the book title */}
        <p>{book.author}</p>         {/* Display the book author */}
        <p>{book.description}</p>    {/* Display the book description */}
    </div>
);

export default Book;
