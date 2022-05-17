import React from "react"
import bookData from "./bookData.json"
import { Link } from "react-router-dom"

export default function WebsiteBooks() {
    const [filter, changeFilter] = React.useState("all")


    const books = bookData.map((data, index) => {
        if (data.tags.includes(filter) || filter === "all")
        return (
            <Link to={`/books/${index}`}  className="bookElement">
                <img src={data.img} alt="book cover" />
                <p className="bookElementHeader">{data.name}</p>
                <p className="bookElementDescription">{data.description}</p>
            </Link>
        )
    })

    return (
        <main>
            <section className="websiteBooks">
                <div className="bookSymbol">
                    <i class="fa-solid fa-book"></i>        
                </div>
                <h1>Books</h1>
                <div className="websiteBookFilters">
                    <div onClick={() => changeFilter("all")} className={filter === "all" && "coloredFilter"}>All</div>
                    <div onClick={() => changeFilter("fiction")} className={filter === "fiction" && "coloredFilter"}>Fiction</div>
                    <div onClick={() => changeFilter("chapter")} className={filter === "chapter" && "coloredFilter"}>Chapter Books</div>
                    <div onClick={() => changeFilter("kids")} className={filter === "kids" && "coloredFilter"}>Kids Books</div>
                    <div onClick={() => changeFilter("other")} className={filter === "other" && "coloredFilter"}>Other</div>
                </div>
                <div className="websiteBooksContainer">
                    {books}
                </div>
            </section>
        </main>
    )
}