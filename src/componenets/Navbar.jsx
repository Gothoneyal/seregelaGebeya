import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/"><img src="src\img\seregelaLOGO.jpeg" alt="LOGO" className='logo' /></Link>
                <div className='middle'>
                    <form>
                        <input type='text' placeholder='Looking For ?' />
                    </form>
                    <button className='search-button'><FaSearch></FaSearch></button>
                </div>
                <div className='right-most'>
                    <Link to="/cart">
                        <FaShoppingCart />
                    </Link>
                    <button className='login-button'>
                        Login/Register
                    </button>
                    <button>
                        <FaUser />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar