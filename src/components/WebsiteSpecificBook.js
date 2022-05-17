import React from "react"
import { useParams } from "react-router-dom"
import bookData from "./bookData.json"

export default function WebsiteSpecificBook() {
    const index = useParams().book
    const book = bookData[index]

    const buyLinks = book.stores.map(data => {
        return <a href={Object.values(data)}>{Object.keys(data)}</a>
    })
    return (
        <main>
            <section className="specificBook">
                <div className="specificBookContainer">
                    <img src={`http://localhost:3000/${book.img}`} alt="book" />
                    <div className="specificBookInfo">
                        <h1>{book.name}</h1>
                        <p>{book.description}</p>
                        <div className="specificBookLinks">
                            {buyLinks}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}