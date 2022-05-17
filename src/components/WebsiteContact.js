import React from "react"

export default function WebsiteContact() {
    return (
        <main>
            <section className="websiteContact">
                <div className="contactContainer">
                    <div className="contactForm">
                        <input type="text" className="contactFormInput" placeholder="First Name"/>
                        <input type="text" className="contactFormInput" placeholder="Last Name"/>
                        <input type="text" className="contactFormInput contactFormInputSpan2" placeholder="Email"/>
                        <input type="text" className="contactFormInput contactFormInputSpan2" placeholder="Phone"/>
                        <input type="text" className="contactFormInput contactFormInputSpan2 contactFormInputBigger" placeholder="Message"/>
                        <button>Submit</button>
                    </div>
                    <div className="contactInfo">
                        <h1>Contact Info</h1>
                        <div className="contactInfoElements">
                            <div className="contactInfoElement">
                                <i class="fa-solid fa-phone"></i>
                                <p>(1) 123 123 1234</p>
                            </div>
                            <div className="contactInfoElement">
                                <i class="fa-solid fa-envelope"></i>
                                <p>loipsum@gmail.com</p>
                            </div>
                            <div className="contactInfoElement">
                                <i class="fa-solid fa-globe"></i>
                                <p>areej-shariq.com</p>
                            </div>
                        </div>
                        <div className="contactInfoSocials">
                            <div>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div>
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}