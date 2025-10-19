"use client";

import React, { useState } from "react";

const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-24 right-5 z-50 px-6 py-3 rounded shadow-md text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  const showToast = (message, type) => {
    setToast({ message, type, visible: true });

    setTimeout(() => {
      setToast({ message: "", type: "", visible: false });
    }, 3000); // Toast disappears after 3 seconds
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const contact = formData.get("contact") || "No Contact Number";
    const dropdown = formData.get("dropdown");
    const message = formData.get("message") || "No Message";

    // Validation for name
    if (name.length < 3) {
      showToast("Name must be at least 3 characters long.", "error");
      return;
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    const payload = {
      name,
      email,
      message: `orniva | ${dropdown} | ${contact} | ${message}`,
    };

    try {
      const response = await fetch("https://justpasteit.in/api/contact/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        showToast("Your ticket has been submitted successfully!", "success");
      } else {
        showToast("Failed to submit your ticket. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      showToast("An error occurred. Please try again later.", "error");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-2 md:py-2 lg:py-2">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Contact Number (Optional)
                      </label>
                      <input
                        type="text"
                        name="contact"
                        placeholder="Enter your contact number"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="dropdown"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Select Service
                      </label>
                      <select
                        name="dropdown"
                        defaultValue="Other"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      >
                        <option value="Website / App Development">
                          Website / App Development
                        </option>
                        <option value="Custom Web Application">
                          Custom Web Application
                        </option>
                        <option value="Search Media Marketing (SEO)">
                          Search Media Marketing (SEO)
                        </option>
                        <option value="Social Media Marketing (Meta Ads)">
                          Social Media Marketing | Meta Ads
                        </option>
                        <option value="Buy / develop Adsense Website">
                          Buy / develop Adsense Website
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Show Toast */}
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: "", type: "", visible: false })}
        />
      )}
    </section>
  );
};

export default Contact;
