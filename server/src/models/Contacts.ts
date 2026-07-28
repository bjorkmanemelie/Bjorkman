import mongoose from "mongoose";

export type Contacts = {
  name: string;
  email: string;
  message: string;
  createdAt: number;
};

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Contact", ContactSchema);
