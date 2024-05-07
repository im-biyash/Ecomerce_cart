// Products.js
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


function Products() {
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

 

  const handleShopNow = (product) => {
    navigate(`/product/${product.id}`, { state: { product } }); // Pass product as state
  };
  

  return (
    <div className="grid grid-cols-4 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-2xl p-2  flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <img
            src={product.images}
            alt={product.title}
            className="w-[140px] h-[400px] mt-2 mb-4"
          />

          <button
            className="bg-green-500 text-white p-2 rounded mt-5"
            onClick={() => handleShopNow(product)} 
          >
            Buy now
          </button>
         
        </div>
      ))}
    </div>
  );
}

export default Products;
