import BookOne from '../components/books/book-one';
import BookTwo from '../components/books/book-two';

function Shop() {

    return (
        <div>
            <h1>Shop</h1>
            <p>Buy things here</p>
            <div className='book-shop'>
                <BookOne />
                <BookTwo />
            </div>
        </div>
    )
}

export default Shop