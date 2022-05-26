import React from "react"
import { Link } from "react-router-dom"
export default function WebsiteNews(props) {
    return (
        <div className="newsSegment">
            <img src={props.image} alt="bookcover"/>
            <div>
                <h2>{props.header}</h2>
                <p className="newsSegmentDescription">{props.description}</p>
                <Link to={`/news/${props.link}`} className="newsSegmentMore">Learn More...</Link>
            </div>
        </div>
    )
}