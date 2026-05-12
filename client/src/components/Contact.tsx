import "../styles/Contacts.css";
import { useState } from "react";
import axios from "axios";

type ContactProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Contact = ({ isOpen, onClose }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/contact", formData);
      onClose();
    } catch (error) {
      console.log("Något gick fel", error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form
        className="form-contact"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Enter your message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button className="input-btn">Skicka</button>
        <button type="button" className="close-btn" onClick={onClose}>
          Stäng
        </button>
      </form>
    </div>
  );
};

export default Contact;
