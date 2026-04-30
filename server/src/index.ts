import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Bestämmer port – kolla .env först, annars använd 5000
const PORT = process.env.PORT || 5000;

// Tillåter frontend  att prata med backend
app.use(cors());

// Låter servern förstå JSON som skickas i requests
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});
