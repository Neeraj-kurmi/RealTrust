import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClientSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/clients`)
      .then(res => setClients(res.data))
      .catch(err => console.error('Error fetching clients:', err));
  }, []);

  return (
    <div className="py-12" id="clients">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {clients.map(client => (
          <div key={client._id} className="p-6 rounded-lg shadow">
            <img
              src={`https://realtrustbackend.onrender.com/uploads/${client.image}`}
              alt={client.name}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
            <p className="italic text-center text-gray-600">{client.description}</p>
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
