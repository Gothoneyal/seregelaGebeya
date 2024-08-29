import React from 'react'
import '../styles/HeroSec.css'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const HeroSec = () => {
    return (
        <div className='home-container'>
            <div className='left-categories'>
                <Link to="/">Stationary</Link>
                <Link to="/">Bed and Bath</Link>
                <Link to="/">Electronics and Home Appliance</Link>
                <Link to="/">Beverage</Link>
                <Link to="/">Personal Care</Link>
                <Link to="/">Food</Link>
                <Link to="/">Home Care</Link>
            </div>
            <div className='hero-section'>
                <div className='hero-img'>
                    <img src="src/img/lw2u4XWGTyrijpg-optimized.jpg" alt="Hero 1" />
                    <img src="src/img/R0MtSdc1C12tjpg-optimized.jpg" alt="Hero 2" />
                    <img src="src/img/7rOmITEHi3Aqjpg-optimized.jpg" alt="Hero 3" />
                </div>
                <div className='services'>
                    <div>
                        <img src="src/img/Logos/fair-price.png" alt="" />
                        <h1>Fair Price</h1>
                        <p>Quality Product In Low Price</p>
                    </div>
                    <div>
                        <img src="src/img/Logos/hand-coin.png" alt="" />
                        <h1>Loan Service</h1>
                        <p>You Can Buy In Debt</p>
                    </div>
                    <div>
                        <img src="src/img/Logos/transport.png" alt="" />
                        <h1>Free Transport</h1>
                        <p>Free Delivery To Your Place</p>
                    </div>
                    <div>
                        <img src="src/img/Logos/large-number.png" alt="" />
                        <h1>Large Number Of Items</h1>
                        <p>Large Number Of Items At Cheap Prices</p>
                    </div>
                    <div>
                        <img src="src/img/Logos/customer-service.png" alt="" />
                        <h1>Customer Service</h1>
                        <p>24/7 Guaranteed Service</p>
                    </div>
                </div>
            </div>
            <div className='loan-register'>
                <FaUser />
                <h1>Welcome!</h1>
                <button className='log'>Login</button>
                <button className='register'>Register Now</button>
                <div className='loan-background'>
                    <p>You don't have enough money? Don't worry, sign up for our loan service!</p>
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSec