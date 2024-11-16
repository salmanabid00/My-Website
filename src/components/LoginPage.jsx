import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, ShoppingCart, Home, Phone } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.email && formData.password) {
        console.log('Login successful');
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFFE7] text-[#000000]">
      <nav className="bg-[#D37F00] p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl font-bold">Your Logo</div>
            <div className="space-x-4">
              {[
                { name: 'Login', icon: LogIn, path: '/login' },
                { name: 'Store', icon: ShoppingCart, path: '/store' },
                { name: 'Home', icon: Home, path: '/home' },
                { name: 'Contact Us', icon: Phone, path: '/contact' }
              ].map((item) => (
                <Link key={item.name} to={item.path} className="text-white hover:text-[#E0DEDE] inline-flex items-center">
                  <item.icon className="mr-1 h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#D37F00] p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">User Login</h1>
            <p className="mb-2">Welcome to Website</p>
            <p className="text-sm">
              TextFree is a mobile application and web service that allows users to send and receive text
              messages, as well as make and receive VoIP phone calls, for free over the internet.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email..."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D37F00]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password..."
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D37F00]"
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="flex justify-between mb-4 text-sm">
              <a href="#" className="text-[#D37F00] hover:underline">
                Forgot Password?
              </a>
              <a href="#" className="text-[#D37F00] hover:underline">
                Help!
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D37F00] text-white py-2 px-4 rounded-md hover:bg-[#B36B00] transition duration-300"
            >
              Log in
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-[#E0DEDE] text-[#000000] py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-xl font-bold">YOUR LOGO</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Product', 'Why Worksome', 'Resources'].map((section) => (
              <div key={section}>
                <h3 className="font-bold mb-2">{section}</h3>
                <ul className="space-y-1">
                  {[
                    'Product overview',
                    'Omni-Channel',
                    'Sourcing',
                    'Compliance & Contracting',
                    'Payments',
                    'Data & Reporting',
                    'Pricing'
                  ].map((item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}