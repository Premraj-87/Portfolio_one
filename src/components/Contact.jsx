// src/components/Contact.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/send", formData);
      if (res.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Server error.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white px-4 py-12 sm:px-6 lg:px-20 xl:px-36"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left Section (30%) */}
        <div className="lg:w-1/3 w-full bg-gray-800 p-6 rounded-lg border border-green-500">
          <div className="space-y-6">
            <div className="flex items-center gap-4 hover:text-green-400 transition">
              <FaEnvelope className="text-xl" />
              <a href="mailto:example@email.com">example@email.com</a>
            </div>
            <div className="flex items-center gap-4 hover:text-green-400 transition">
              <FaLinkedin className="text-xl" />
              <a href="https://linkedin.com" target="_blank">LinkedIn Profile</a>
            </div>
            <div className="flex items-center gap-4 hover:text-green-400 transition">
              <FaInstagram className="text-xl" />
              <a href="https://instagram.com" target="_blank">Instagram Profile</a>
            </div>
          </div>
        </div>

        {/* Right Section (70%) */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-2/3 w-full bg-gray-800 p-6 rounded-lg border border-green-500 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-500"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 resize-none focus:outline-none focus:border-green-500"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="lg:w-1/3 w-full bg-gray-900 p-8 rounded-lg flex flex-col items-center justify-center text-center my-6">
  <a
    href="https://github.com/Premraj-87"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-xl font-semibold text-white hover:text-green-400 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.111.82-.261.82-.58 0-.287-.01-1.043-.015-2.049-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.932 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.649.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.813 1.103.813 2.222 0 1.606-.014 2.901-.014 3.293 0 .322.216.697.825.578C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
    Prem Raj Anand
  </a>
  <p className="text-sm text-gray-400 mt-2">© 2025</p>
</div>

      
    </section>
  );
};

export default Contact;
