'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, ShoppingCart, Home, Phone, X } from 'lucide-react'

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 bg-[#674D00] text-white rounded hover:bg-[#031E00] transition-colors duration-200 ${className}`} {...props}>
    {children}
  </button>
)

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white text-[#031E00] rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

const Sheet = ({ children, isOpen, onClose }) => (
  isOpen && (
    <div className="fixed inset-0 bg-[#031E00]/80 backdrop-blur-sm z-50">
      <div className="fixed right-0 top-0 h-full w-80 bg-[#E7D37F] p-6 shadow-lg">
        {children}
        <button onClick={onClose} className="absolute top-4 right-4 text-[#031E00]">
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
)

const Input = ({ className, ...props }) => (
  <input className={`border border-[#674D00] bg-white px-3 py-2 text-sm text-[#031E00] ${className}`} {...props} />
)

const Alert = ({ children, className, ...props }) => (
  <div className={`bg-[#E7D37F] text-[#031E00] p-4 rounded ${className}`} role="alert" {...props}>
    {children}
  </div>
)

const HomePage = () => {
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [allProducts, setAllProducts] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const productCategories = [
    {
      name: "Fruits",
      products: [
        { name: "Apples", price: 3.99, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Bananas", price: 1.99, image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" },
        { name: "Oranges", price: 4.99, image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" },
        { name: "Strawberries", price: 5.99, image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80" },
        { name: "Grapes", price: 4.49, image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" },
        { name: "Pineapple", price: 6.99, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        { name: "Mango", price: 2.99, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
        { name: "Kiwi", price: 3.49, image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
      ]
    },
    {
      name: "Vegetables",
      products: [
        { name: "Carrots", price: 1.99, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Broccoli", price: 2.49, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1201&q=80" },
        { name: "Tomatoes", price: 3.99, image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Spinach", price: 2.99, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Peppers", price: 3.49, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Cucumber", price: 1.79, image: "https://images.unsplash.com/photo-1449300079323-02e209d9b916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
        { name: "Lettuce", price: 2.29, image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Onions", price: 1.49, image: "https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1963&q=80" },
      ]
    },
    {
      name: "Soft Drinks",
      products: [
        { name: "Cola", price: 1.99, image: "https://images.unsplash.com/photo-1622483767028-3f66869433c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Lemonade", price: 2.49, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Iced Tea", price: 2.99, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Orange Soda", price: 1.99, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Sparkling Water", price: 1.49, image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" },
        { name: "Ginger Ale", price: 2.29, image: "https://images.unsplash.com/photo-1598614187854-26a60e982dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Root Beer", price: 2.49, image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
        { name: "Fruit Punch", price: 2.79, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
      ]
    },
    {
      name: "Condiments",
      products: [
        { name: "Ketchup", price: 2.99, image: "https://images.unsplash.com/photo-1607602275934-acd7e1c8c2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Mustard", price: 2.49, image: "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Mayonnaise", price: 3.99, image: "https://images.unsplash.com/photo-1590010654578-76b1cd8e1e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Hot Sauce", price: 3.49, image: "https://images.unsplash.com/photo-1574105079631-8f0d16747b3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Soy Sauce", price: 2.99, image: "https://images.unsplash.com/photo-1590942109970-1c8c0d4b3bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "BBQ Sauce", price: 3.79, image: "https://images.unsplash.com/photo-1593197733744-7b8ad0868a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Ranch Dressing", price: 3.29, image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" },
        { name: "Olive Oil", price: 5.99, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
      ]
    },
    {
      name: "Groceries",
      products: [
        { name: "Bread", price: 2.99, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" },
        { name: "Milk", price: 3.49, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Eggs", price: 4.99, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Cheese", price: 5.99, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" },
        { name: "Cereal", price: 3.99, image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Pasta", price: 2.49, image: "https://images.unsplash.com/photo-1551462147-ff29ce9d4853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        { name: "Rice", price: 4.29, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { name: "Flour", price: 3.79, image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
      ]
    },
  ]

  useEffect(() => {
    setAllProducts(productCategories.flatMap(category => category.products))
  }, [])

  const addToCart = (product) => {
    setCart([...cart, product])
    setAlertMessage(`${product.name} has been added to the cart.`)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.name !== productName))
  }

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white text-[#031E00]">
      <nav className="bg-[#674D00] p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl font-bold">Your Logo</div>
            <div className="space-x-4">
              {[{ name: 'Home', icon: Home, path: '/home' },
                { name: 'Store', icon: ShoppingCart, path: '/store' },
                { name: 'Contact Us', icon: Phone, path: '/contact' },
                { name: 'About', icon: LogIn, path: '/about' }].map((item) => (
                <Link key={item.name} to={item.path} className="text-white hover:text-[#E7D37F] inline-flex items-center">
                  <item.icon className="mr-1 h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-4">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md"
          />
        </div>
        {productCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#674D00]">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((product, productIndex) => (
                <Card key={productIndex} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-[#674D00] mb-2">${product.price.toFixed(2)}</p>
                      <Button
                        onClick={() => addToCart(product)}
                        className="w-full"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>

      <Button 
        onClick={() => setIsSheetOpen(true)} 
        className="fixed bottom-4 right-4 z-50"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Cart ({cart.length})
      </Button>

      <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span>{item.name} - ${item.price.toFixed(2)}</span>
                  <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.name)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <div className="mt-4">
                <strong>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>
              </div>
            </div>
          )}
        </div>
      </Sheet>

      {showAlert && (
        <Alert className="fixed bottom-4 left-4 z-50 w-96">
          <h3 className="font-semibold">Success</h3>
          <p>{alertMessage}</p>
        </Alert>
      )}

      <footer className="bg-[#E7D37F] text-[#031E00] py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-xl font-bold">YOUR LOGO</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Product', 'Why Worksome', 'Resources'].map((section) => (
              <div key={section}>
                <h3 className="font-bold mb-2">{section}</h3>
                <ul className="space-y-1">
                  {['Product overview', 'Omni-Channel', 'Sourcing', 'Compliance & Contracting', 'Payments', 'Data & Reporting', 'Pricing'].map((item) => (
                    <li key={item} className="text-sm hover:text-[#674D00]">
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
  )
}

export default HomePage