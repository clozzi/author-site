import author from '../images/author.jpg';
import book1 from '../images/book.jpg';
import book2 from '../images/book2.webp';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';

function Index() {
    const slider = document.querySelector(".books");
    const slides = document.querySelectorAll(".book");
    const btn = document.querySelectorAll(".btn");

    let current = 0;
    let prev = 4;
    let next = 1;

    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext())
    }

    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

    const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
        current - number;
        prev = current - 1;
        next = current + 1;

        for (let i=0; i<slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
        }

        if (next == 5) {
            next = 0;
        }

        if (prev == -1) {
            prev = 4;
        }

        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
    }

    return (
        <div>
            <img src={author} alt="Generic Author" style={{width: "100px", height: "100px"}}/>
            <p><i>I am a motivational quote intended to inspire the reader.</i></p>
            {/* <ul>
                <li>Book One</li>
                <li>Book Two</li>
                <li>Book Three</li>
            </ul> */}
            <div className='books'>
                <div className='book active'>
                    <img src={book1} alt='Book1 Image'/>
                </div>
                <div className='book next'>
                    <img src={book2} alt='Book2 Image'/>
                </div>
                <div className='book'>
                    <img src={book3} alt='Book3 Image'/>
                </div>
                <div className='book'>
                    <img src={book4} alt='Book4 Image'/>
                </div>
                <div className='book prev'>
                    <img src={book5} alt='Book5 Image'/>
                </div>
                <div className='btn-container'>
                    <div className='btn'><i className='fas fa-angle-left'></i></div>
                    <div className='btn'><i className='fas fa-angle-right'></i></div>
                </div>
            </div>
        </div>
    )
}

export default Index