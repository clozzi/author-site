import bookImage from "../../images/book2.webp";

function BookTwo() {
    return (
        <div className="book-two">
            <img src={bookImage} alt="book cover" style={{width: "200px"}}/>
            <h3>Book Two</h3>
            <p>A short summary of the book here -- leave the wordsmithing to the professionals</p>
            <button onClick={() => console.log('shop btn clicked')}>Learn More</button>
        </div>
    )
}

export default BookTwo;