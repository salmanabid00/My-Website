import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ShoppingCart, Home, Phone } from 'lucide-react';

const ContactUsPage = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#000000] min-h-screen flex flex-col">
      <header className="bg-[#E7D37F] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#000000]">Your Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/home" className="text-[#000000] hover:text-[#343434]"><Home className="inline mr-1" />Home</Link></li>
              <li><Link to="/store" className="text-[#000000] hover:text-[#343434]"><ShoppingCart className="inline mr-1" />Store</Link></li>
              <li><Link to="/contact" className="text-[#000000] hover:text-[#343434]"><Phone className="inline mr-1" />Contact Us</Link></li>
              <li><Link to="/about" className="text-[#000000] hover:text-[#343434]"><LogIn className="inline mr-1" />About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#000000]">Contact Us</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#000000] mb-2">Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name..." className="w-full p-2 border border-[#E7D37F] rounded focus:outline-none focus:ring-2 focus:ring-[#E7D37F]" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#000000] mb-2">E-Mail:</label>
            <input type="email" id="email" placeholder="Enter Your Email..." className="w-full p-2 border border-[#E7D37F] rounded focus:outline-none focus:ring-2 focus:ring-[#E7D37F]" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-[#000000] mb-2">Message:</label>
            <textarea id="message" placeholder="Message..." className="w-full p-2 border border-[#E7D37F] rounded focus:outline-none focus:ring-2 focus:ring-[#E7D37F] h-32"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#E7D37F] text-[#000000] py-2 px-4 rounded hover:bg-[#d3b85f] transition duration-300">Submit</button>
        </form>
      </main>

      <footer className="bg-[#E7D37F] text-[#000000] py-8">
        <div className="container mx-auto px-4">
          <div className="text-2xl font-bold mb-4">Your Logo</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Product', 'Why Worksome', 'Resources'].map((section) => (
              <div key={section}>
                <h3 className="font-bold text-lg mb-2">{section}</h3>
                <ul className="space-y-1">
                  {['Product overview', 'Omni-Channel Sourcing', 'Compliance & Contracting', 'Payments', 'Data & Reporting', 'Pricing'].map((item) => (
                    <li key={item} className="text-sm hover:text-[#343434]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;