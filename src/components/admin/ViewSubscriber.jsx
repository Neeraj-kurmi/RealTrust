import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewSubscribers() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/subscribers`).then(res => setSubscribers(res.data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Newsletter Subscribers</h2>
      <div className="overflow-x-auto shadow-md border rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-green-100 text-left text-sm font-medium">
            <tr>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Subscribed On</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length > 0 ? (
              subscribers.map((s) => (
                <tr key={s._id} className="border-t text-sm hover:bg-gray-50">
                  <td className="px-4 py-2">{s.email}</td>
                  <td className="px-4 py-2">{new Date(s.createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2" className="text-center py-4 text-gray-500">No subscribers yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
