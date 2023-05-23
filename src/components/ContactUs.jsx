import React, { useRef } from "react";

export default function ContactUs() {
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(message.current.value);
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  }

  return (
    <div>
      <h1 className="header">Contact Us</h1>
      <div className="contactform">
        <div className="title"></div>
        <div>
          <form className="details" onSubmit={(e) => onFormSubmit(e)}>
            <div>
              <h4>Your Name</h4>
              <input
                type="text"
                className="detail"
                placeholder="Your Name goes here..."
                required
                ref={name}
              />
            </div>
            <div>
              <h4>Your Email</h4>
              <input
                type="email"
                className="detail"
                placeholder="Your email goes here..."
                required
                ref={email}
              />
            </div>
            <div>
              <h4>Any message for us?</h4>
              <textarea
                type="text"
                className="detail"
                placeholder="Your message goes here..."
                ref={message}
              ></textarea>
            </div>
            <br />
            <button type="submit" className="detail contact--button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
