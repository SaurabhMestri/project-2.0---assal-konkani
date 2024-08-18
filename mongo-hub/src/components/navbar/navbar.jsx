import React from 'react'
import './navbar.css'
import user from "/src/assets/user.png"
import cart from "/src/assets/cart.png"
import search from "/src/assets/search.png"
const navbar = () => {
    return (
        <div className='container'>
            <div className="nav-container">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="nav-search">
                    <input type="text" />
                    <a href="">
                    <img src={search} width={25} height={25} />
                    </a>
                </div>
                <div className="right">
                    <img src={user} width={40} height={40} />
                    <img src={cart}  width={40} height={40}/>
                </div>
            </div>

        </div>
    )
}

export default navbar