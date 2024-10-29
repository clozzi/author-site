import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import author from '../images/author.jpg';
import book1 from '../images/book.jpg';
import book2 from '../images/book2.webp';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';
import tales from '../images/tales_of_the_bacchae.jpg';
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