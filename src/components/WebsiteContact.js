import React from "react"
import emailjs from "emailjs-com"
export default function WebsiteContact() {
    const form = React.useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cu9t9dx', 'template_1hdaicr', form.current, 'uMOzHGGuFxwXmHefZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <main>
            <section className="websiteContact">
                <div className="contactContainer">
                    <form ref={form} className="contactForm" onSubmit={sendEmail}>
                        <input type="text" className="contactFormInput" placeholder="First Name" name="first_name" required/>
                        <input type="text" className="contactFormInput" placeholder="Last Name" name="last_name"/>
                        <input type="text" className="contactFormInput contactFormInputSpan2" placeholder="Email" name="email" required/>
                        <input type="text" className="contactFormInput contactFormInputSpan2" placeholder="Phone" name="phone"/>
                        <textarea className="contactFormInput contactFormInputSpan2 contactFormInputBigger" placeholder="Message" name="message" required></textarea>
                        <button>Submit</button>
                    </form>
                    <div className="contactInfo">
                        <h1>Contact Info</h1>
                        <div className="contactInfoElements">
                            <div className="contactInfoElement">
                                <i className="fa-solid fa-envelope"></i>
                                <p>loipsum@gmail.com</p>
                            </div>
                            <div className="contactInfoElement">
                                <i className="fa-solid fa-globe"></i>
                                <p>areej-shariq.com</p>
                            </div>
                        </div>
                        <div className="contactInfoSocials">
                            <a href="https://www.instagram.com/tothedoctorseries/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}