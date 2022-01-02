import emailjs from "emailjs-com";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  function validateEmail(email) {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please Fill all the Fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please Enter Correct Email");
      return;
    }

    setLoader(true);

    emailjs
      .sendForm(
        "gmail",
        "template_qk7xaex",
        e.target,
        "user_oyqYsJ093ctYLVat6K5KF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        alert("I will reach out to you very soon 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    if (loader === false) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-full md:w-8/12 px-5 pt-10 pb-16 md:pb-10"
    >
      <div className="text-center mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
          Contact
        </h1>
        <h3 className="text-xl mb-5 font-light">Wanna hire me? Let's Talk!</h3>
        <div className="text-center mb-10">
          {/* Custom Style Used */}
          <span className="line w-1"></span>
          <span className="line w-3"></span>
          <span className="line w-40"></span>
          <span className="line w-3"></span>
          <span className="line w-1"></span>
        </div>
      </div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col  h-5/6 gap-7 font-mono justify-between text-justify"
      >
        <input
          type="text"
          placeholder="Enter Your Name..."
          className="textInput"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
        />
        <input
          type="email"
          placeholder="Enter Your Email..."
          className="textInput"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />
        <textarea
          type="text"
          rows={5}
          className="h-80 md:h-56 textInput"
          placeholder="Enter Your Message..."
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          className="btn2 bg-brand"
          style={{ background: loader === true ? "#ccc" : "" }}
          disabled={loader}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
