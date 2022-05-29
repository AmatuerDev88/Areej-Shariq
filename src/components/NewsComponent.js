import React from "react"
import { Link } from "react-router-dom"
export default function WebsiteNews(props) {
    return (
        <div className="newsSegment" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            <img src={props.image} alt="bookcover"/>
            <div>
                <h2>{props.header}</h2>
                <p className="newsSegmentDescription">{props.description}</p>
                <Link to={`/news/${props.link}`} className="newsSegmentMore">Learn More...</Link>
            </div>
        </div>
    )
}