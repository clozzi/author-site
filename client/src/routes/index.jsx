import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import author from '../images/author.jpg';
import book1 from '../images/book.jpg';
import book2 from '../images/book2.webp';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';

function Index() {
    

    return (
        <div>
            <img src={author} alt="Generic Author" style={{width: "100px", height: "100px"}}/>
            <p><i>I am a motivational quote intended to inspire the reader.</i></p>
            <Carousel>
                <div className='book'>
                    <img src={book1} alt='Book1 Image'/>
                </div>
                <div className='book'>
                    <img src={book2} alt='Book2 Image'/>
                </div>
                <div className='book'>
                    <img src={book3} alt='Book3 Image'/>
                </div>
                <div className='book'>
                    <img src={book4} alt='Book4 Image'/>
                </div>
                <div className='book'>
                    <img src={book5} alt='Book5 Image'/>
                </div>
            </Carousel>
        </div>
    )
}

export default Index