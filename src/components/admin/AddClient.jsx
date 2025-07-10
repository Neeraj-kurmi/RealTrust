import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddClient() {
  const [form, setForm] = useState({ name: '', description: '', designation: '' });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('description', form.description);
    data.append('designation', form.designation);
    if (image) data.append('image', image);

    await axios.post(`${import.meta.env.REACT_APP_API_URL}/api/clients/upload`, data);
    toast.success('Client added successfully!');
    setForm({ name: '', description: '', designation: '' });
    setImage(null);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded shadow-md border">
      <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">Add New Client</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-green-500"
          required
        />
        <input
          name="designation"
          value={form.designation}
          onChange={handleChange}
          placeholder="Designation"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-green-500"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border border-gray-300 rounded px-4 py-2 h-28 resize-none focus:outline-green-500"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-gray-500 cursor-pointer"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
