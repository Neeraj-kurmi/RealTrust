import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('/api/contacts').then(res => setContacts(res.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Contact Submissions</h2>
      <div className="overflow-x-auto shadow-md border rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-100 text-left text-sm font-medium">
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile</th>
              <th className="px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((c) => (
                <tr key={c._id} className="border-t text-sm hover:bg-gray-50">
                  <td className="px-4 py-2">{c.fullName}</td>
                  <td className="px-4 py-2">{c.email}</td>
                  <td className="px-4 py-2">{c.mobile}</td>
                  <td className="px-4 py-2">{c.city}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="4" className="text-center py-4 text-gray-500">No contacts found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
