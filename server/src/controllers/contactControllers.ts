import Contacts from "../models/Contacts";
import type { Request, Response } from "express";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contacts.create({ name, email, message });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel", error });
  }
};
