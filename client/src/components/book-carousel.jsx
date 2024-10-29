import { useState } from "react";

import book1 from "../images/book.jpg";
import book2 from '../images/book2.webp';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';
import tales from '../images/tales_of_the_bacchae.jpg';

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function BookCarousel() {
    const images = [book1, book2, book3, book4, book5, tales];
    const [currentIndex, setCurrentIndex] = useState(0);

    function prevSlide() {
        if (currentIndex === 0) {
            let newIndex = images.length - 1;
            setCurrentIndex(newIndex);
        } else {
            let newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
        }
    }

    function nextSlide() {
        if (currentIndex === images.length - 1) {
            let newIndex = 0;
            setCurrentIndex(newIndex);
        } else {
            let newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
        }
    }
    return (
        <div className="book-carousel">
            <button className="carousel-btn left" onClick={prevSlide}><FaArrowLeft /></button>
            <img 
                src={images[currentIndex]} 
                alt={`Book ${currentIndex + 1}`} 
                className="carousel-img" 
            />
            <button className="carousel-btn right" onClick={nextSlide}><FaArrowRight /></button>
        </div>
    )
};

export default BookCarousel;