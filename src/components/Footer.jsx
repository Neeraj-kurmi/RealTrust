import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        <p className="mb-2 md:mb-0">All Rights Reserved @2025</p>
        
        <img src="/images/logo.svg" alt="Logo" className="h-10 w-auto" />        
        
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
