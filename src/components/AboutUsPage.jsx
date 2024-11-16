import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ShoppingCart, Home, Phone } from 'lucide-react';

const ServiceCard = ({ title, description }) => (
  <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-md">
    <h3 className="text-[#000000] text-xl font-bold mb-4">{title}</h3>
    <p className="text-[#808080] mb-4">{description}</p>
    <button className="bg-[#000000] text-[#FFFFFF] px-4 py-2 rounded hover:bg-[#333333] transition duration-300">See More...</button>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#000000] min-h-screen flex flex-col font-['Inria_Sans']">
      <header className="bg-[#F0F0F0] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold font-['Kaushan_Script']">Your Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/home" className="text-[#000000] hover:text-[#808080]"><Home className="inline mr-1" />Home</Link></li>
              <li><Link to="/store" className="text-[#000000] hover:text-[#808080]"><ShoppingCart className="inline mr-1" />Store</Link></li>
              <li><Link to="/about" className="text-[#000000] hover:text-[#808080]"><LogIn className="inline mr-1" />About Us</Link></li>
            </ul>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="p-2 rounded border border-[#808080] focus:outline-none focus:ring-2 focus:ring-[#000000]" />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center font-['Kaushan_Script']">About Us</h1>
        
        <section className="mb-12">
          <p className="text-[#808080] text-center max-w-2xl mx-auto">
            TextFree is a mobile application and web service that allows users to send and receive text
            messages, as well as make and receive VoIP phone calls, for free over the internet.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[...Array(6)].map((_, index) => (
            <ServiceCard 
              key={index}
              title="Free text online" 
              description="TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the internet."
            />
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-[#F0F0F0] p-6 rounded-lg shadow-md">
              <h3 className="text-[#000000] text-xl font-bold mb-4">TextFree is a mobile application and web service</h3>
              <button className="bg-[#000000] text-[#FFFFFF] px-4 py-2 rounded hover:bg-[#333333] transition duration-300">See More...</button>
            </div>
          ))}
        </section>

        <section className="bg-[#F0F0F0] p-8 rounded-lg mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Free text online</h2>
            <p className="text-[#808080] mb-6">
              TextFree is a mobile application and web service that allows users to send and receive text messages, 
              as well as make and receive VoIP phone calls, for free over the internet.
            </p>
            <button className="bg-[#000000] text-[#FFFFFF] px-6 py-3 rounded text-lg hover:bg-[#333333] transition duration-300">Sign Up</button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Texting" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Free text online</h2>
            <p className="text-[#808080] mb-4">
              TextFree is a mobile application and web service that allows users to send and receive text messages, 
              as well as make and receive VoIP phone calls, for free over the internet.
            </p>
            <button className="bg-[#000000] text-[#FFFFFF] px-4 py-2 rounded hover:bg-[#333333] transition duration-300">Learn More</button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-[#F0F0F0] p-6 rounded-lg shadow-md text-center">
              <img src={[
                "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              ][index]} alt="Service" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-[#000000] text-xl font-bold mb-4">TextFree is a mobile application and web service</h3>
              <button className="bg-[#000000] text-[#FFFFFF] px-4 py-2 rounded hover:bg-[#333333] transition duration-300">See More...</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-[#F0F0F0] text-[#000000] py-8">
        <div className="container mx-auto px-4">
          <div className="text-2xl font-bold mb-4 font-['Kaushan_Script']">Your Logo</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Product', 'Why Worksome', 'About service', 'Resources'].map((section) => (
              <div key={section}>
                <h3 className="font-bold text-lg mb-2">{section}</h3>
                <ul className="space-y-1">
                  {[
                    'Product overview',
                    'Omni-Channel Sourcing',
                    'Compliance & Contracting',
                    'Payments',
                    'Data & Reporting',
                    'Pricing'
                  ].map((item) => (
                    <li key={item} className="text-[#808080] hover:text-[#000000]">{item}</li>
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

export default AboutUsPage;