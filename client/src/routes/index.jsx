import 'react-responsive-carousel/lib/styles/carousel.min.css';
import author from '../images/author.jpg';
import BookCarousel from '../components/book-carousel';

function Index() {
    

    return (
        <div className='index-route'>
            <div className='hero'>
                <img src={author} alt="Generic Author" className="auth-img" />
                <p><i>Lawyer | Father | Husband | Writer</i></p>
            </div>
            <BookCarousel />
        </div>
    )
}

export default Index