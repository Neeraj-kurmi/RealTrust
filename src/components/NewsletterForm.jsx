import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await axios.post('http://localhost:5000/api/subscribers', { email }); // change if needed
      toast.success('Subscribed!')
      setEmail('');
    } catch (err) {
      toast.success('Failed to subscribe.');
    }
  };

  return (
    <div>
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Rectangle.svg')" }} // <-- Replace with your image path
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Learn more about our listing process,<br />
            as well as our additional staging and design work.
          </h2>
          <button className="bg-white text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition">
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="flex flex-wrap gap-6 text-sm font-medium justify-center md:justify-start">
            <a href="#home" className="hover:text-gray-200">Home</a>
            <a href="#services" className="hover:text-gray-200">Services</a>
            <a href="#projects" className="hover:text-gray-200">Projects</a>
            <a href="#testimonials" className="hover:text-gray-200">Testimonials</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-wrap items-center gap-2">
            <label className="font-semibold">Subscribe Us</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
