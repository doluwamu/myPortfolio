import { useState } from "react";
import github from "../assets/img/socials/github.png";
import linkedin from "../assets/img/socials/linkedin.png";
import dribbble from "../assets/img/socials/dribbble.png";
import whatsapp from "../assets/img/socials/whatsapp.png";

import phone from "../assets/img/contact/phone.png";
import mail from "../assets/img/contact/mail.png";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const [nameErr, setNameErr] = useState(false);
  // const [emailErr, setEmailErr] = useState(false);
  // const [messageErr, setMessageErr] = useState(false);

  // const [errMsg, setErrMsg] = useState("");

  // const checkValidation = (e) => {
  //   e.preventDefault();
  //   if (!name || name.length < 1) {
  //     setErrMsg("Please enter a name!");
  //     return setNameErr(true);
  //   }
  //   if (name.length < 3) {
  //     setErrMsg("Name must be at least 3 characters!");
  //     return setNameErr(true);
  //   }
  // };

  return (
    <section className="contact flex flex-col px-4 py-24 sm:px-10 md:items-start md:flex-row">
      <div className="title flex flex-col gap-8 py-6 md:px-4 md:w-1/2 lg:px-24">
        <div className="header flex flex-col gap-3 xsm:items-center md:items-start">
          <h1 className="text-4xl text-white font-bold">Contact me</h1>
          <h2 className="text-2xl text-white xsm:text-center sm:text-center">
            Let's bring your idea to reality
          </h2>
        </div>

        <div className="socials flex flex-col gap-6 xsm:items-center md:items-start">
          <h1 className="text-2xl text-white font-bold">
            Follow me on my socials
          </h1>
          <div className="social-links flex gap-8">
            <a
              href="https://www.linkedin.com/in/doluwamu-adeitan-41bab5201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>

            <a
              href="https://github.com/doluwamu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>

            <a
              href="https://dribbble.com/doluwamu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dribbble} alt="dribbble" />
            </a>

            <a
              href="https://whatsapp.com/dl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>

        <div className="other-contact-info flex flex-col gap-4 py-8 xsm:items-center md:items-start">
          <a href="tel:+2349019307489" className="flex gap-2 items-center">
            <img src={phone} alt="img" style={{ height: "12px" }} />
            <span>+234 901 9307 489</span>
          </a>

          <a
            href="mailto:adoluwamu@gmail.com"
            className="flex gap-2 items-center"
          >
            <img src={mail} alt="img" style={{ height: "12px" }} />
            <span>adoluwamu@gmail.com</span>
          </a>

          <a
            href="/docs/resume.pdf"
            target="_blank"
            className="btn-download py-3 mt-6 border border-green bg-green rounded-lg"
            rel="noopener noreferrer"
            style={{ width: "150px" }}
          >
            <p className="text-center text-white">Download CV</p>
          </a>
        </div>
      </div>

      <form
        className="contact-form  w-full flex flex-col gap-6 md:gap-6 md:w-1/2 md:px-4 lg:px-14"
        // onSubmit={checkValidation}
        action="https://formsubmit.co/adoluwamu@gmail.com"
        method="POST"
      >
        <div
          className="flex flex-col md:w-1/3 w-full"
          style={{ width: "100%" }}
        >
          <div className="py-2">
            <label className="text-white">Name:</label>
          </div>
          <input
            type="text"
            name="name"
            className="w-full"
            style={{ width: "100%" }}
            // value={name}
            // onInput={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          {/* {nameErr === true && <p>{errMsg}</p>} */}
        </div>

        <div className="flex flex-col w-full">
          <div className="py-2">
            <label className="text-white">Email:</label>
          </div>
          <input
            type="email"
            name="email"
            className="w-full"
            // value={email}
            // onInput={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <div className="py-2">
            <label className="text-white">Subject:</label>
          </div>
          <input
            type="text"
            name="subject"
            className="w-full"
            placeholder="Subject"
          />
        </div>

        <div className="w-full">
          <div className="py-2">
            <label className="text-white">Message:</label>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full"
            required
            // value={message}
            // onInput={(e) => setMessage(e.target.value)}
            // cols="30"
            rows="5"
          ></textarea>
        </div>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </section>
  );
};

export default Contact;
