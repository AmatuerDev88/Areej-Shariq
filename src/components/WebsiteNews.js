import React from "react"
import NewsComponent from "./NewsComponent"

export default function WebsiteNews() {
    const [markdown, changeMarkdown] = React.useState([])

    const importAll = (r) => {
        return r.keys().map(r);
    };
      
    const allData = importAll(
        require.context("./posts", false)
    )

    React.useEffect(() => {
        allData.map(data => {
            fetch(data)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    changeMarkdown(prevState => [...prevState, text])
                })
        })
    }, [])

    let markdownData;

    if (markdown.length > 0) {
        markdownData = markdown.map((data1, index) => {
            let markdownObjectValues = data1.split("---")[1].split("\n").map(data2 => {
                return data2.substring((data2.indexOf(":") + 1))
            })
            console.log(markdownObjectValues)
            return (
                <NewsComponent 
                    image={markdownObjectValues[2]}
                    header={markdownObjectValues[1]}
                    description={markdownObjectValues[4]}
                    link={index}
                    key={index}
                />
            )
        })
    }

    return (
        <main>
            { markdown &&
                <section className="websiteNews">
                    <div className="bookSymbol">
                        <i class="fa-solid fa-book"></i>        
                    </div>
                    <h1>News</h1>
                    {markdownData}
                </section>
            }
        </main>
    )
}