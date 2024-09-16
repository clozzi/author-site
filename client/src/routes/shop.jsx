import { useEffect, useState } from 'react';
import BookCard from '../components/book-card';

function Shop() {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(r => r.json())
        .then(books => {setBooks(books), console.log(books)})
    }, [])

    return (
        <div>
            <h1>Shop</h1>
            <p>Buy things here</p>
            <div className='book-shop'>
                {books ? (
                    <div>
                        {books.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h2>Loading...</h2>
                        <p>Worth the wait!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shop