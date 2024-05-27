import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { increment, decrement, checkout,removeItem } from "../Features/cartSlice"; // Import action creators

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log("cartitems:", cartItems);
  const quantities = useSelector((state) => state.cart.quantities); // Corrected typo here
  const dispatch = useDispatch(); // Initialize useDispatch hook

  // Calculate total quantity and total amount
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount); // This line is commented out because totalAmount is not defined in the Redux store

  return (
    <div className="container mx-auto flex">
      <div className="w-3/4">
        <h1 className="text-xl font-bold my-3">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b-2 py-4 w-3/4 h-40"
              >
                <div className="h-24">
                  
                    <img
                      src={item.image} // Assuming you want to display the first image
                      alt={item.title}
                      className="w-20 h-24"
                    />
                 

                  <span className="text-sm w-[30px] ">{item.title}</span>
                </div>
                <div>
                  <button
                    className="text-indigo-500 mr-2"
                    onClick={() =>
                      dispatch(
                        decrement({ productId: item.id, price: item.price })
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    className="w-12 border rounded text-center text-black"
                    type="text"
                    name=""
                    id=""
                    readOnly
                    value={quantities[item.id] || 1}
                  />

                  <button
                    className="text-indigo-500  ml-2"
                    onClick={() =>
                      dispatch(
                        increment({ productId: item.id, price: item.price })
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <button
  className="text-black p-1 rounded ml-2 bg-red-400 mt-24"
  onClick={() => dispatch(removeItem(item.id))} // Pass item id as payload
>
  Remove item
</button>

                <div>
                  <span>${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/4 ml-4">
        <h1 className="text-2xl font-bold my-4">Order Summary</h1>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: {totalAmount}</p>
        {/* <p>Total Amount: ${totalAmount}</p> */}{" "}
        {/* Total amount is not defined in Redux store */}
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
          onClick={checkout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
