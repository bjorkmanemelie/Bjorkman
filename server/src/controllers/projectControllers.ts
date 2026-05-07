import type { Request, Response } from "express";
import Project from "../models/Projects.js";

export const getProjects = async (_req: Request, res: Response) => {
  // hämta alla projekt och skicka tillbaka
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel", error });
  }
};
