"use client"
import "./formspree.css";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdklqpld");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className="fs-form" onSubmit={handleSubmit}>
      <div className="fs-field">
        <label className="fs-label" htmlFor="name">
          Name
        </label>
        <input className="fs-input" id="name" name="name" />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="email">
          Email
        </label>
        <input className="fs-input" id="email" name="email" required />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="message">
          Message
        </label>
        <textarea className="fs-textarea" id="message" name="message" />
        <p className="fs-description">
          We usually respond within 1-2 business days.
        </p>
      </div>
      <div className="fs-button-group">
        <button className="fs-button" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}