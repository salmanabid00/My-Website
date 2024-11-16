import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaTimes } from 'react-icons/fa';

const ProductCard = ({ product, addToCart }) => (
  <div className="bg-[#FFFFFE] rounded-lg shadow-md overflow-hidden">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-[#000000] font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-[#000000] text-sm mb-2">{product.description}</p>
      <p className="text-[#000000] font-bold mb-2">{product.price}</p>
      <div className="flex justify-between items-center">
        <span className="text-[#E7D37F] font-bold">{product.rating}</span>
        <button 
          onClick={() => addToCart(product)}
          className="bg-[#E7D37F] text-[#000000] px-4 py-2 rounded hover:bg-[#D3C06F] transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const StorePage = () => {
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showCart, setShowCart] = useState(false);

    const products = [
        {
          name: "Fresh Alphonso Mango",
          description: "Sweet and aromatic Alphonso mangoes from India",
          image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
          rating: "4.8",
          price: "$5.99"
        },
        {
          name: "Organic Bananas",
          description: "Fresh organic bananas from Ecuador",
          image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
          rating: "4.5",
          price: "$2.99"
        },
        {
          name: "Red Apples",
          description: "Crisp and sweet red apples",
          image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
          rating: "4.3",
          price: "$3.49"
        },
        {
          name: "Fresh Strawberries",
          description: "Juicy organic strawberries",
          image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
          rating: "4.6",
          price: "$4.99"
        },
        {
          name: "Green Grapes",
          description: "Sweet seedless green grapes",
          image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
          rating: "4.4",
          price: "$3.99"
        },
        {
          name: "Ripe Pineapple",
          description: "Sweet and tropical pineapple",
          image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
          rating: "4.7",
          price: "$4.49"
        },
        {
          name: "Fresh Oranges",
          description: "Juicy Valencia oranges",
          image: "https://images.unsplash.com/photo-1547514701-42782101795e",
          rating: "4.5",
          price: "$3.99"
        },
        {
          name: "Dragon Fruit",
          description: "Exotic and nutritious dragon fruit",
          image: "https://images.unsplash.com/photo-1527325678286-3f73c2bb2e2d",
          rating: "4.2",
          price: "$6.99"
        },
        {
          name: "Kiwi Fruit",
          description: "Vitamin-rich kiwi fruits",
          image: "https://images.unsplash.com/photo-1585059895524-72359e06133a",
          rating: "4.4",
          price: "$2.99"
        },
        {
          name: "Fresh Blueberries",
          description: "Antioxidant-rich blueberries",
          image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
          rating: "4.6",
          price: "$4.99"
        },
        {
          name: "Watermelon",
          description: "Sweet and refreshing watermelon",
          image: "https://images.unsplash.com/photo-1563114773-84221bd62daa",
          rating: "4.5",
          price: "$5.99"
        },
        {
          name: "Fresh Peaches",
          description: "Juicy summer peaches",
          image: "https://images.unsplash.com/photo-1521243495304-138a02be58e2",
          rating: "4.3",
          price: "$3.99"
        },
        {
          name: "Red Cherries",
          description: "Sweet and tart cherries",
          image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf",
          rating: "4.7",
          price: "$5.99"
        },
        {
          name: "Fresh Limes",
          description: "Zesty and aromatic limes",
          image: "https://images.unsplash.com/photo-1622957461168-202c5766e1ed",
          rating: "4.2",
          price: "$2.49"
        },
        {
          name: "Pomegranate",
          description: "Antioxidant-rich pomegranate",
          image: "https://images.unsplash.com/photo-1541344999736-37b67419ccfd",
          rating: "4.6",
          price: "$4.99"
        },
        {
          name: "Fresh Figs",
          description: "Sweet and delicate figs",
          image: "https://images.unsplash.com/photo-1601379760883-1bb497c558e0",
          rating: "4.4",
          price: "$6.99"
        },
        {
          name: "Green Pears",
          description: "Crisp and juicy pears",
          image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a",
          rating: "4.3",
          price: "$3.49"
        },
        {
          name: "Fresh Raspberries",
          description: "Sweet and tangy raspberries",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5",
          rating: "4.8"
        },
        {
          name: "Blackberries",
          description: "Fresh wild blackberries",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
          rating: "4.5",
          price: "$4.99"
        },
        {
          name: "Fresh Plums",
          description: "Sweet and juicy plums",
          image: "https://images.unsplash.com/photo-1603408209093-cd3c9a667944",
          rating: "4.4",
          price: "$3.49"
        }
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
        setAlertMessage(`${product.name} has been added to the cart.`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove));
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-[#FFFFFE] text-[#000000] min-h-screen">
            <header className="bg-[#E7D37F] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">Your Logo</div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link to="/home" className="hover:text-[#FFFFFE]">Home</Link></li>
                            <li><Link to="/store" className="hover:text-[#FFFFFE]">Store</Link></li>
                            <li><Link to="/contact" className="hover:text-[#FFFFFE]">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="pl-8 pr-2 py-1 rounded"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <button className="text-2xl relative" onClick={() => setShowCart(!showCart)}>
                            <FaShoppingCart />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="bg-[#E7D37F] rounded-lg overflow-hidden mb-8 flex items-center">
                    <div className="w-1/2 p-8">
                        <h2 className="text-4xl font-bold mb-4">Tasty and Fresh</h2>
                        <p className="mb-4">A mango is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
                        <button className="bg-[#000000] text-[#FFFFFE] px-6 py-2 rounded hover:bg-opacity-80 transition duration-300">BUY NOW</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1553279768-865429fa0078" alt="Featured Mango" className="w-1/2 h-80 object-cover" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={index} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </main>

            {showCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                    <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Shopping Cart</h2>
                            <button onClick={() => setShowCart(false)} className="text-2xl">&times;</button>
                        </div>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <>
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center mb-4">
                                        <div>
                                            <h3 className="font-bold">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                            <p className="text-sm font-bold">{item.price}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item)} className="text-red-500">
                                            <FaTimes />
                                        </button>
                                    </div>
                                ))}
                                <div className="mt-4">
                                    <strong>Total Items: {cart.length}</strong>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

            {showAlert && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
                    {alertMessage}
                </div>
            )}

            <footer className="bg-[#E7D37F] text-[#000000] py-8">
                <div className="container mx-auto px-4">
                    <div className="text-2xl font-bold mb-4">Your Logo</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Product', 'Why Worksome', 'Resources'].map((section) => (
                            <div key={section}>
                                <h3 className="font-bold text-lg mb-2">{section}</h3>
                                <ul className="space-y-1">
                                    {['Product overview', 'Omni-Channel Sourcing', 'Compliance & Contracting', 'Payments', 'Data & Reporting', 'Pricing'].map((item) => (
                                        <li key={item} className="text-sm hover:text-[#FFFFFE]">{item}</li>
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

export default StorePage;