"use client";

import { useState } from "react";
import axios from "axios";

// -----------

// to handle sending form message
type serverStateType = {
  submitting: boolean;
  status?: {
    ok: boolean;
    msg: string;
  } | null;
};

type formDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const initialFormData: formDataType = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<formDataType>(initialFormData);
  const [serverState, setServerState] = useState<serverStateType>({
    submitting: false,
    status: null,
  });

  /**
   * Change {formData} variable when user input data
   *
   * @param e change event in form inputs
   */
  const handleDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Handle the http request we sent to send our message (that user wrote)
   * and give message to the user to know what happened, is the message sent or not.
   *
   * @param ok if message has been sent or not
   * @param msg the message to be shown to the user
   */
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFormData(initialFormData);
    }
    setTimeout(() => {
      setServerState((prev: serverStateType) => ({ ...prev, status: null }));
    }, 3000);
  };

  /**
   * Submitting message when user clock send button.
   *
   * The user will add his formspree end point here.
   *
   * @param e form submit event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submitting Form
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mblrgnob", // user formspree endpoint
      data: formData,
    })
      .then((r) => {
        handleServerResponse(true, "Message Has Been Send");
      })
      .catch((r) => {
        handleServerResponse(false, "Error occuars while sending");
      });
  };

  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="content-945 center-relative">
          {/* Contact Page description text */}
          <div className="one_third">
            
          </div>
          <div className="big-text two_third last">
            Hello! Need Something?
          </div>
          <div className="clear"></div>
          <br />
          <br />
          {/* Contact Informations and links */}
          <div className="one_third">
            <div className="info-code">
              <p className="info-code-title">EMAIL</p>
              <p className="info-code-content">HELLO@YOURSITE.COM</p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="two_third last">
            <form className="contact-form" onSubmit={handleSubmit}>
              <p>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData["name"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  pattern="(?=.*[\w\.\-\?\$!#]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}"
                  required
                  value={formData["email"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData["subject"]}
                  onChange={handleDataChange}
                />
              </p>
              <p>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  value={formData["message"]}
                  onChange={handleDataChange}
                ></textarea>
              </p>
              <p className="contact-submit-holder">
                <input type="submit" value="SEND" />
              </p>
              {(serverState.submitting || serverState.status?.msg) && (
                <p className="respond-message">
                  {serverState.submitting
                    ? "Sending message"
                    : serverState.status
                    ? serverState.status?.msg
                    : ""}
                </p>
              )}
            </form>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
