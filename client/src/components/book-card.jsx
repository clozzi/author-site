function BookCard() {
    return (
        <div className="book-card">
            <img src="" alt="" onClick={() => console.log('book clicked')}/>
            <h3>Title of Book Here</h3>
            <p>A short summary of the book here -- leave the wordsmithing to the professionals</p>
            <button onClick={() => console.log('shop btn clicked')}>Learn More</button>
        </div>
    )
}

export default BookCard