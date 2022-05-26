import React from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'

export default function WebsiteSpecificNews() {
    const [markdown, changeMarkdown] = React.useState([])
    const index = useParams().index

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

    if (markdown.length > 1) {
        console.log("all Markdown " + markdown[index])
        markdownData = markdown[index].split("---")[1].split("\r\n").map(data2 => {
            return data2.substring((data2.indexOf(":") + 1))
        })
        console.log(markdownData)
    }
    return (
        <main>
            { markdownData &&
                <section className="specificNews">
                    <img src={markdownData[4]} alt="post thumbnail" className="specificNewsThumbnail" />
                    <h1 className="specificNewsHeader">{markdownData[2]}</h1>
                    <p className="specificNewsAuthor"><span>Written by</span> Areej Shariq  |  Tags, go, here</p>
                    <div className="specificNewsArticleInfo">
                        <ReactMarkdown>{markdown[index].split("---")[2].replace("<!--EndFragment-->", "").replace("<!--StartFragment-->", "")}</ReactMarkdown>
                    </div>
                </section>
            }
        </main>
    )
}