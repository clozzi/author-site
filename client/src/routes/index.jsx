import book from '../images/book.jpg'

function Index() {
    return (
        <div>
            <img src={book} alt="Book Logo" style={{width: "100px", height: "100px"}}/>
            <p>Quote goes here</p>
            <ul>
                <li>Book One</li>
                <li>Book Two</li>
                <li>Book Three</li>
            </ul>
        </div>
    )
}

export default Index