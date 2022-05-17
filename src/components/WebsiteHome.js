import React from "react"
import { Link } from "react-router-dom"
import bookData from "./bookData.json"

export default function WebsiteHome() {
    const books = bookData.map((data, index) => {
        return (
            <Link to={`/books/${index}`} className="bookElement">
                <img src={data.img} alt="book cover" />
                <p className="bookElementHeader">{data.name}</p>
                <p className="bookElementDescription">{data.description}</p>
            </Link>
        )
    })
    return (
        <main>
            <section className="home">
                <div className="homeContainer">
                    <img src="bookCover.png" alt="newest book" className="homeImage"/>
                    <div className="homeInfo">
                        <h1><span>OUCH! </span>My tummy hurts!</h1>
                        <p>OUCH! My Tummy Hurts is intended to help inform children about the medical world. In this story, avid football player Oliver Price has a mysterious tummy ache and loss of appetite. This book follows him 'to the doctors' and throughout his medical journey towards making a full recovery from his diagnosis...</p>
                        <Link to="/books/0">View Now</Link>
                    </div>
                </div>
            </section>
            <section className="books">
                <div className="seperationLine"></div>
                <div className="bookSymbol">
                    <i class="fa-solid fa-book"></i>        
                </div>
                <h2>My Books</h2>
                <div className="booksGrid">
                    {books}
                </div>
                <Link to="/books" className="moreBooksButton">View All Books</Link>
            </section>
            <section className="about">
                <div>
                    <div className="aboutContainer">
                        <img src="author.png" alt="author"/>
                        <div>
                            <p className="authorSubHeader">Message From The Author</p>
                            <h3>About Areej Shariq</h3>
                            <p className="authorDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit id nulla pharetra efficitur. Integer feugiat commodo urna, quis malesuada justo rhoncus in. Quisque id elit id nulla pharetra pharetra efficitur. Integer feugiat commodo urna</p>
                            <Link to="/about" className="moreAuthorButton">See More...</Link>
                        </div>
                    </div>
                    <div className="aboutExtraContainer">
                        <p className="aboutExtraHeader">Areej Shariq</p>
                        <p className="aboutExtraTitle">Author</p>
                    </div>
                </div>
            </section>{/**/}
        </main>
    )
}