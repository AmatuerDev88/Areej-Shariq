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

    if (markdown.length >= allData.length) {
        markdownData = markdown.map((data1, index) => {
            let markdownObjectValues = data1.split("---")[1].split("\n").map(data2 => {
                return data2.substring((data2.indexOf(":") + 1))
            })
            return (
                <NewsComponent 
                    image={markdownObjectValues[2]}
                    header={markdownObjectValues[1]}
                    description={markdownObjectValues.splice(4).join("").substring(0, 175) + "..."}
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
                    <div className="bookSymbol" data-aos="fade-up" data-aos-once="true">
                        <i className="fa-solid fa-book"></i>        
                    </div>
                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="100">Articles</h1>
                    {markdownData ? markdownData : <div className="websiteNewsPreload"></div>}
                </section>
            }
        </main>
    )
}