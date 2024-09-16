function BookCard({ book }) {
    console.log(book)
    return (
        <div className="book-card">
            {/* <img src="" alt="" onClick={() => console.log('book clicked')}/> */}
            <img src={book.image} alt="book cover" />
            {/* <h3>Title of Book Here</h3> */}
            <h3>{book.title}</h3>
            <p>A short summary of the book here -- leave the wordsmithing to the professionals</p>
            <button onClick={() => console.log('shop btn clicked')}>Learn More</button>
        </div>
    )
}

export default BookCard