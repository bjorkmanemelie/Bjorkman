import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Bestämmer port – kolla .env först, annars använd 5000
const PORT = process.env.PORT || 5000;

// Tillåter frontend  att prata med backend
app.use(cors());

// Låter servern förstå JSON som skickas i requests
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log("Ansluten till MongoDB!"))
  .catch((err) => console.log("Fel:", err));

app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});
