import React from "react"
import { Link } from "react-router-dom"

export default function Nav(props) {
    
    return (
        <>
            <nav>
                <h1>Areej Shariq</h1>
                <div className="navElements">
                    <Link to="/">Home</Link>
                    <Link to="/books">Books</Link>
                    <Link to="/about">About</Link>
                    <Link to="/news">News</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                {props.dropdown ? <i class="fa-solid fa-bars dropdownIcons" onClick={props.changeDropdownState}></i> : <i class="fa-solid fa-x dropdownIcons2" onClick={props.changeDropdownState}></i>}
            </nav>
            <div className="dropdownAlign">
                <div className={props.dropdown ? "dropdown dropdownClosed" : "dropdown dropdownOpen" }>
                    <div className="dropdownElements">
                        <Link to="/" className="dropdownElement" onClick={props.changeDropdownState}>Home</Link>
                        <Link to="/books" className="dropdownElement" onClick={props.changeDropdownState}>Books</Link>
                        <Link to="/about" className="dropdownElement" onClick={props.changeDropdownState}>About</Link>
                        <Link to="/news" className="dropdownElement" onClick={props.changeDropdownState}>News</Link>
                        <Link to="/contact" className="dropdownElement" onClick={props.changeDropdownState}>Contact</Link>
                    </div>
                </div>
            </div>
        </>
        
    )
}