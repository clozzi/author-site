import { Link, useNavigate } from "react-router-dom";
import book from '../images/book.jpg';

function Navbar() {
    const navigate = useNavigate()
    function toggleNav() {
        const nav = document.querySelector(".nav-links")
        nav.classList.toggle("nav-active")
        const navLinks = document.querySelectorAll(".nav-links li")
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        })
        const burger = document.querySelector(".burger")
        burger.classList.toggle("toggle")
    }


    return (
        <nav className="navbar">
            <div className="logo">
              <img src={book} alt="Book Logo" className="logo-img" />
              <p 
                className="home-btn" 
                onClick={() => navigate('/')}>
                    Brian Andrew
                </p>
            </div>
            
            <ul className="nav-links">
                <li>
                    <Link to={'about'}>About</Link>
                </li>
                <li>
                    <Link to={'shop'}>Shop</Link>
                </li>
                <li>
                    <Link to={'musings'}>Musings</Link>
                </li>
            </ul>
            <div className="burger" onClick={() => toggleNav()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar