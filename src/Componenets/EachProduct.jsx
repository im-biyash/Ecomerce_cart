import React from "react";
import { useLocation } from "react-router-dom";
import { increment, decrement, addToCart } from "../Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function EachProduct() {
  const location = useLocation();
  const product = location.state?.product; // Use optional chaining to safely access nested properties

  if (!product) {
    return <div>No product found!</div>;
  }
  const dispatch = useDispatch();
  const quantities = useSelector((state) => state.cart.quantities);
  const quantity = quantities[product.id] || 0;


  return (
    <div className="container px-2 py-10 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-[300px] lg:h-[450px] h-64  object-center rounded"
          src={product.images}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-lg title-font text-black font-bold tracking-widest">
            {product.title}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {product.name}
          </h1>
          {/* Ratings */}
          <div className="flex mb-4">
            {/* Replace with your actual rating logic */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`w-4 h-4 ${
                  product.rating?.count && index < product.rating.count
                    ? "text-indigo-500"
                    : "text-gray-400"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-3">
              {product.rating?.rate} Reviews
            </span>
          </div>

          <p className="leading-relaxed">{product.description}</p>
          {/* Color and Size selection */}
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            {/* Color options */}

            {/* Size selection */}
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="flex items-center justify-center ml-3">
                <h1>Quantity: </h1>
                <button
                  className="text-black font-bold p-1 w-8 h-8 rounded-lg bg-red-400"
                  onClick={() => dispatch(decrement({ productId: product.id }))}
                >
                  -
                </button>
                <input
                  className="w-12 border rounded text-center text-black"
                  type="text"
                  name=""
                  id=""
                  readOnly
                  value={quantity || 1}
                />
                <button
                  className="text-black font-bold p-1 w-8 h-8 rounded-lg bg-green-400"
                  onClick={() => dispatch(increment({ productId: product.id}))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Price and action buttons */}
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              ${product.price}
            </span>
            <button
              onClick={() =>
                dispatch(addToCart({ id: product.id, price: product.price,image:product.images[0],title:product.title }))
              }
              className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Add to cart
            </button>

            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;
