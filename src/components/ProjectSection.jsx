import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project) => (
        <div key={project._id} className="bg-white rounded-lg overflow-hidden shadow">
          <img
            src={`http://localhost:5000${project.image}`}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-blue-600 font-bold text-lg mb-1">{project.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{project.description}</p>
            <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 transition">
              READ MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
