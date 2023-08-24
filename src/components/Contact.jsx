import { useState } from "react";

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
    <section className="contact px-4 py-24">
      <div className="title flex flex-col gap-4 py-6">
        <h1 className="text-4xl text-center text-white font-bold">
          Contact me
        </h1>
        <h2 className="text-2xl text-white text-center">
          Let's bring your idea to reality
        </h2>
      </div>
      <br />

      <form
        className="contact-form flex flex-col gap-6 items-center justify-center md:gap-6"
        // onSubmit={checkValidation}
        action="https://formsubmit.co/adoluwamu@gmail.com"
        method="POST"
      >
        <div className="sec-1 flex flex-col justify-center items-center gap-6 w-full md:flex-row md:gap-4 md:px-12 md:py-8 lg:gap-6 lg:px-40">
          <div className="flex flex-col md:w-1/3" style={{ width: "100%" }}>
            <div className="py-2">
              <label className="text-white">Name:</label>
            </div>
            <input
              type="text"
              className="w-full"
              name="name"
              // value={name}
              // onInput={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            {/* {nameErr === true && <p>{errMsg}</p>} */}
          </div>

          <div className="flex flex-col md:w-1/3" style={{ width: "100%" }}>
            <div className="py-2">
              <label className="text-white">Email:</label>
            </div>
            <input
              type="email"
              className="w-full"
              name="email"
              // value={email}
              // onInput={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div className="flex flex-col md:w-1/3" style={{ width: "100%" }}>
            <div className="py-2">
              <label className="text-white">Subject:</label>
            </div>
            <input
              type="text"
              className="w-full"
              name="subject"
              placeholder="Subject"
            />
          </div>
        </div>

        <div className="sec-1 flex flex-col justify-center items-center gap-6 w-full md:flex-row md:px-12 lg:px-40">
          <div
            className="justify-center items-center"
            style={{ width: "100%" }}
          >
            <div className="py-2">
              <label className="text-white">Message:</label>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              required
              // value={message}
              // onInput={(e) => setMessage(e.target.value)}
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Submit"
          className="submit-btn"
          style={{ width: "100px" }}
        />
      </form>
    </section>
  );
};

export default Contact;
