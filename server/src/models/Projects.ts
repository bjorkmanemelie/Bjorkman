import mongoose from "mongoose";

export type Project = {
  title: string;
  description: string;
  technologies: [];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
};

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  githubUrl: { type: String, required: true },
  liveUrl: { type: String, required: false },
  featured: { type: Boolean, required: true },
});

export default mongoose.model("Project", projectSchema);
