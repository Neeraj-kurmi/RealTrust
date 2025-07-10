import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.REACT_APP_API_URL}/api/contacts`, form);
      toast.success('Quote requested successfully!');
      setForm({ fullName: '', email: '', mobile: '', city: '' });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-[#47517c] text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Get a Free Consultation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 rounded border border-white bg-transparent focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded border border-white bg-transparent focus:outline-none"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
          className="w-full p-2 rounded border border-white bg-transparent focus:outline-none"
        />
        <input
          type="text"
          name="city"
          placeholder="Area, City"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full p-2 rounded border border-white bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
        >
          Get Quick Quote
        </button>
      </form>
    </div>
  );
}
