import BookCard from '../components/book-card';

function Shop() {
    return (
        <div>
            <h1>Shop</h1>
            <p>Buy things here</p>
            <div className='book-shop'>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    )
}

export default Shop