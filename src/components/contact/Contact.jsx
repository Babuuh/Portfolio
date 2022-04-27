import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    const sendEmail = (e) => {
      e.preventDefault();
    
  
      emailjs.sendForm('service_g8tkux4', 'template_4w77c1d', form.current, 'YG0si6zy-wlaso9To')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            document.connect.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
                    <span>Contact Me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#abf1ff94" }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} name="connect">
                    <input
                        type="text"
                        name="user_name"
                        className="user"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        className="user"
                        placeholder="Email"
                        required
                    />
                       <input
                        type="text"
                        name="user_number"
                        className="user"
                        placeholder="Phone No."
                        required
                    />
                    <textarea name="message" className="user" placeholder="Message" required />
                    <input type="submit" value="Send" className="button"/>
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
