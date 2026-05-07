import { useState, useEffect } from "react";
import axios from "axios";
import type { Project } from "../types/index";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        setError("Något gick fel");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  return { projects, loading, error };
};

export default useProjects;
