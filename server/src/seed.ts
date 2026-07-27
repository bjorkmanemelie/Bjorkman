import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Projects";

dotenv.config();

const projects = [
  {
    title: "Film Vault",
    description:
      "A movie browsing app for discovering and saving your favourite films.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/bjorkmanemelie/film-vault",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "A weather app that fetches live forecast data from an external API based on your location.",
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    githubUrl: "https://github.com/bjorkmanemelie/project_weatherApp",
    featured: true,
  },
  {
    title: "Snake Game",
    description:
      "Classic Snake game built with JavaScript and HTML Canvas.",
    technologies: ["JavaScript", "HTML Canvas"],
    githubUrl: "https://github.com/bjorkmanemelie/Snake_game",
    featured: false,
  },
  {
    title: "Pawpals",
    description:
      "A social platform for pet owners to connect, share and find services for their pets. Group project.",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/PawPatrol-2/Pawpals",
    featured: true,
  },
  {
    title: "Producto",
    description:
      "A product management application built as a group project with a fullstack TypeScript setup.",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/Malmo2/Producto",
    featured: true,
  },
  {
    title: "EduTech Smart",
    description:
      "A landing page for an educational technology platform, designed and built as a group project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Malmo2/edutechsmart-landingpage",
    featured: false,
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI!);
  console.log("Connected to MongoDB");

  await Project.deleteMany({});
  console.log("Cleared existing projects");

  await Project.insertMany(projects);
  console.log(`Inserted ${projects.length} projects`);

  await mongoose.disconnect();
  console.log("Done!");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
