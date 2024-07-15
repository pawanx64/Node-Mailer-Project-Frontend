import React, { useState, useEffect } from "react";
import axios from "axios";

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-around">
        <h2 className="flex justify-center text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Products
        </h2>
        <div className="flex justify-end mb-4">
            <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md text-sm hover:bg-red-600 focus:outline-none"
            >
            Logout
            </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="text-gray-600 ml-1">
                      {product.rating.rate.toFixed(1)} ({product.rating.count}{" "}
                      reviews)
                    </span>
                  </div>
                  <p className="text-gray-800 font-semibold">${product.price}</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <button className="text-sm text-gray-600 hover:text-indigo-600 focus:outline-none">
                    View Details
                  </button>
                  <button className="bg-indigo-600 text-white py-2 px-4 rounded-md text-sm hover:bg-indigo-700 focus:outline-none">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
