import React from "react"

export default function WebsiteAbout() {
    return (
        <main>
            <section className="websiteAbout">
                <div className="websiteAboutAlign">
                    <div className="websiteImageContainer">
                        <img src="author.png" alt="author"  data-aos="fade-up" data-aos-once="true" data-aos-delay="500"/>
                        <p className="websiteImageHeader" data-aos="fade-up" data-aos-once="true" data-aos-delay="600">Areej Shariq</p>
                        <p className="websiteImageSubHeader" data-aos="fade-up" data-aos-once="true" data-aos-delay="700" data-aos-offset="-500">Author</p>
                    </div>
                    <div className="websiteAboutInfo">
                        <p className="websiteAboutSubHeader" data-aos="fade-up" data-aos-once="true" data-aos-delay="800">Message From The Author</p>
                        <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="900">About Areej Shariq</h1>
                        <p className="websiteAboutDescription" data-aos="fade-up" data-aos-once="true" data-aos-delay="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit id nulla pharetra efficitur. Integer feugiat commodo urna, quis malesuada justo rhoncus in. Quisque id elit id nulla pharetra pharetra efficitur. Integer feugiat commodo urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit id nulla pharetra efficitur. Integer feugiat commodo urna, quis malesuada justo rhoncus in. Quisque id elit id nulla pharetra pharetra efficitur. Integer feugiat commodo urna. Lorem ipsum dolor sit amet,<br /><br />consectetur adipiscing elit. Quisque id elit id nulla pharetra efficitur. Integer feugiat commodo urna, quis malesuada justo rhoncus in. Quisque id elit id nulla pharetra pharetra efficitur. Integer feugiat commodo urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit id nulla pharetra efficitur. Integer feugiat commodo urna, quis malesuada justo rhoncus in. Quisque id elit id nulla pharetra pharetra efficitur. Integer feugiat commodo urna</p>
                    </div>
                </div>  
                <div className="websiteAboutSeperationLine"></div>
                <div className="websiteAboutQuotes">
                    <div className="websiteAboutQuote">
                        <p className="websiteAboutQuoteDescription">“Lorem Ipsum Dolor Sit Amet Quisque id elit id nulla pharetra”</p>
                        <p className="websiteAboutQuotePerson">- New York Times</p>
                    </div>
                    <div className="websiteAboutQuote">
                        <p className="websiteAboutQuoteDescription">“Lorem Ipsum Dolor Sit Amet Quisque id elit id nulla pharetra”</p>
                        <p className="websiteAboutQuotePerson">- New York Times</p>
                    </div>
                    <div className="websiteAboutQuote">
                        <p className="websiteAboutQuoteDescription">“Lorem Ipsum Dolor Sit Amet Quisque id elit id nulla pharetra”</p>
                        <p className="websiteAboutQuotePerson">- New York Times</p>
                    </div>
                    <div className="websiteAboutQuote">
                        <p className="websiteAboutQuoteDescription">“Lorem Ipsum Dolor Sit Amet Quisque id elit id nulla pharetra”</p>
                        <p className="websiteAboutQuotePerson">- New York Times</p>
                    </div>
                </div>
            </section>
        </main>
    )
}