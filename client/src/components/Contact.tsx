import "../styles/Contacts.css";
import { useState } from "react";
import axios from "axios";

type ContactProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Contact = ({ isOpen, onClose }: ContactProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      if (res.data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form
        className="form-contact"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        {status === "success" ? (
          <div className="form-success">
            <p>Message sent!</p>
            <button type="button" className="close-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Your message"
              value={formData.message}
              required
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {status === "error" && <p className="form-error">Something went wrong. Try again.</p>}
            <button className="input-btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            <button type="button" className="close-btn" onClick={onClose}>Close</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Contact;
