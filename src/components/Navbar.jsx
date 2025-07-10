import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=" sm:px-24 px-6 py-4 sm:flex justify-between items-center shadow sticky top-0 bg-white">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/images/logo.svg" alt="Logo" className="h-10 w-auto" />
      </Link>

      {/* Nav Links */}
      <div className="space-x-4 text-sm font-medium">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/#services" className="hover:text-gray-400">Services</Link>
        <Link to="/#projects" className="hover:text-gray-400">Projects</Link>
        <Link to="/admin" className="bg-white text-blue-600 px-3 py-3 rounded hover:bg-gray-100 transition">
          Admin
        </Link>
        <Link to="#contact" >
          <button
            type="submit"
            className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold p-2 rounded cursor-pointer"
          >
            Contact
          </button>
        </Link>
        
      </div>
    </nav>
  );
}
