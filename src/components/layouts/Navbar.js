import React from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                <img className="style"src={logo} alt="logo"/>
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span>
                   <i className="fas fa-bars" style={{color: 'black'}} />
                </span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase" to="/"><i className="fas fa-home"></i> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/news"><i className="fas fa-newspaper"></i> News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/thingstodo"><i className="fas fa-th-list"></i> Things to do</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/hotels"><i className="fas fa-hotel"></i> Hotels</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/nightlife"><i className="fas fa-cocktail"></i> Nightlife</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/food"><i className="fas fa-utensils"></i> Food</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-2" to="/contactus"><i className="far fa-envelope"></i> Contact Us</Link>
                    </li>
                </ul>
                <div className="col">
                    <form className="form-inline ml-auto">
                        <div className="col">
                            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"
                            style={{width:'100%'}} />
                        </div>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar;
