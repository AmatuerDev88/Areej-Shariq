import React from "react"
import NewsComponent from "./NewsComponent"
import ReactMarkdown from 'react-markdown'

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
        console.log(markdown)
        markdownData = markdown.map((data1, index) => {
            let markdownObjectValues = data1.split("---")[1].split("\n").map(data2 => {
                return data2.substring((data2.indexOf(":") + 1))
            })
            let markdownDescription = data1.split("---")[2].split("\n").map(data2 => {
                if (!data2.includes("["))
                return data2
            })
            let filteredDescription = markdownDescription.filter(value => {
                return value !== "\r"
            })
            return (
                <NewsComponent 
                    image={markdownObjectValues[2]}
                    header={markdownObjectValues[1]}
                    description={filteredDescription.join(" ").replaceAll("#", "").replaceAll("*", "").replaceAll("<!--EndFragment-->", "").replaceAll("<!--StartFragment-->", "").substring(0, 175) + "..."}
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
                    {markdownData ? markdownData : <div class="websiteNewsPreload"></div>}
                </section>
            }
        </main>
    )
}