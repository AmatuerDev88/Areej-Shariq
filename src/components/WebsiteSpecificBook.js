import React from "react"
import { useParams } from "react-router-dom"
import bookData from "./bookData.json"

export default function WebsiteSpecificBook() {
    const index = useParams().book
    const book = bookData[index]

    const buyLinks = book.stores.map((data, index) => {
        return (
            <div className="specificBookAnimateStores" data-aos="fade-up" data-aos-once="true" data-aos-delay={`${(index * 100) + 900}`}>
                <a href={Object.values(data)}>{Object.keys(data)}</a>
            </div>
        )
    })
    return (
        <main>
            <section className="specificBook">
                <div className="specificBookContainer">
                    <img src={`/${book.img}`} alt="book"  data-aos="fade-up" data-aos-once="true" data-aos-delay="500"/>
                    <div className="specificBookInfo">
                        <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="700">{book.name}</h1>
                        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="900">{book.description}</p>
                        <div className="specificBookLinks">
                            {buyLinks}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}