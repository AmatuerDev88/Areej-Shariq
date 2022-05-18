import React from "react"
import NewsComponent from "./NewsComponent"

export default function WebsiteNews() {
    return (
        <main>
            <section className="websiteNews">
                <div className="bookSymbol">
                    <i class="fa-solid fa-book"></i>        
                </div>
                <h1>News</h1>
                <NewsComponent />
            </section>
        </main>
    )
}