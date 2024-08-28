import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='subscribe'>
                <h2>Subscribe To Our News Letter</h2>
                <p>Always Be The First To Hear New Information About The Products You Buy</p>
                <form>
                    <input type='text' placeholder='' />
                    <button className='register-btn'>Register</button>
                </form>
                <button className='register-btn2'>Register</button>

            </div>
            <div className='get-it'>
                <a href='https://play.google.com/store/apps/details?id=com.seregela.majet'><img src="src\img\get-it-on-google-play-badge.png" alt="googlePlay" className='google-play' /></a>
                <a href='https://www.apple.com/us/search/seregela-gebeya?src=globalnav'><img src="src\img\download-on-app-store.jpeg" alt="appStore" className='app-store' /></a>
                {/*rifer to google play to "https://play.google.com/store/apps/details?id=com.seregela.majet" with google play image*/}
                {/*rifer to app store to "https://www.apple.com/us/search/seregela-gebeya?src=globalnav" with app store image*/}
            </div>
            <div className='catagory'>
                <h1>Buy</h1>
                <Link to="/">Stationary</Link>
                <Link to="/">Bed and Bath</Link>
                <Link to="/">Electronics and Home Appliance</Link>
                <Link to="/">Beverage</Link>
                <Link to="/">Personal Care</Link>
                <Link to="/">Food</Link>
                <Link to="/">Home Care</Link>
            </div>
            <div className='become-seller'>
                <h1>Become A Seller</h1>
                <a href=''>Call Center</a>
                <a href=''>Ordered Products</a>
                <a href=''>Return Policy</a>
                <a href=''>Contact Us</a>
            </div>
            <div className='about'>
                <h1>Seregela</h1>
                <a href=''>About Seregela</a>
                <a href=''>Our Responsibility</a>
                <a href=''>Vision</a>
            </div>
            <div className='powered-by'>
                <p>Powered by <a href='https://zowitech.com/'>Zowithech</a></p>
            </div>
        </footer>
    )
}

export default Footer