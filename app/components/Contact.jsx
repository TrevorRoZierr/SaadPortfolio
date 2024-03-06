"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zk3pwga",
        "service_zk3pwga",
        form.current,
        "Hrk3myk-4GMixpPl7"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-gradient-to-r from-blue-800 to-blue-950 sm:p-10 p-8" id="contact">
      <div className="sm:p-5 p-3">
        <h1 className="sm:text-6xl text-4xl sm:font-bold font-semibold text-gray-300 font-unbounded">
          Lets Talk
        </h1>
      </div>
      <div className="sm:p-3 p-2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="border-2 border-black rounded shadow-[0.35rem_0.35rem_5px_0px_rgba(0,0,0,1)] sm:p-5 p-2"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name:"
            className="sm:my-3 my-2 sm:p-3 p-2 bg-transparent border-2 rounded-md placeholder:text-gray-300 placeholder:font-semibold"
          />
          <br />
          <input
            type="text"
            name="user_email"
            placeholder="Email:"
            className="sm:my-3 my-2 sm:p-3 p-2 bg-transparent border-2 rounded-md placeholder:text-gray-300 placeholder:font-semibold"
          />
          <br />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message:"
            className="sm:my-3 my-2 sm:p-3 p-2 bg-transparent border-2 rounded-md placeholder:text-gray-300 placeholder:font-semibold"
          ></textarea>
          <div className="p-2 sm:p-4 flex justify-center items-center">
            <button
              type="submit"
              className="my-2 sm:my-4 p-2 sm:p-4 border-4 border-black sm:text-lg text-md text-black font-semibold bg-gray-300 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
