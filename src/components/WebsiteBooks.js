import React from "react"
import bookData from "./bookData.json"
import { Link } from "react-router-dom"

export default function WebsiteBooks() {
    const [filter, changeFilter] = React.useState("all")


    const books = bookData.map((data, index) => {
        if (data.tags.includes(filter) || filter === "all")
        return (
            <Link to={`/books/${index}`}  className="bookElement" key={index} data-aos="fade-up" data-aos-once="true" data-aos-delay="1300">
                <img src={data.img} alt="book cover" />
                <p className="bookElementHeader">{data.name}</p>
                <p className="bookElementDescription">{data.description}</p>
            </Link>
        )
    })

    return (
        <main>
            <section className="websiteBooks">
                <div className="bookSymbol" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
                    <i className="fa-solid fa-book"></i>        
                </div>
                <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="700">Books</h1>
                <div className="websiteBookFilters">
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="800">
                        <div onClick={() => changeFilter("all")} className={filter === "all" && "coloredFilter"}>All</div>
                    </div>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="900">
                        <div onClick={() => changeFilter("fiction")} className={filter === "fiction" && "coloredFilter"}>Fiction</div>
                    </div>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="1000">
                        <div onClick={() => changeFilter("chapter")} className={filter === "chapter" && "coloredFilter"}>Chapter Books</div>
                    </div>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="1100">
                        <div onClick={() => changeFilter("kids")} className={filter === "kids" && "coloredFilter"}>Kids Books</div>
                    </div>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="1200">
                        <div onClick={() => changeFilter("other")} className={filter === "other" && "coloredFilter"}>Other</div>
                    </div>
                </div>
                <div className="websiteBooksContainer">
                    {books}
                </div>
            </section>
        </main>
    )
}