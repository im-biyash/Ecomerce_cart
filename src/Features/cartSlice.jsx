import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantities: {},
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const { productId, price } = action.payload;
      console.log("Incrementing price:", price); // Add console log
      state.quantities[productId] = (state.quantities[productId] || 0) + 1;
      state.totalQuantity += 1;
      state.totalAmount += parseFloat(price); // Ensure price is converted to a number
    },
    
    decrement: (state, action) => {
      const { productId, price } = action.payload;
      console.log("Decrementing price:", price); // Add console log
      if (state.quantities[productId] > 0) {
        state.quantities[productId] -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= parseFloat(price); // Ensure price is converted to a number
      }
    },
    
    
    addToCart: (state, action) => {
      const { id, price, image, title, description } = action.payload;
      console.log("Adding item to cart. Price:", price); // Log the price
      
      // Check if the item with the same id already exists in the cart
      const existingItem = state.cart.find(item => item.id === id);
      
      if (existingItem) {
        // Item already exists in the cart, show alert
        alert('Item already added to cart!');
      } else {
        // Item doesn't exist, add it to the cart
        state.cart.push({ id, price, image, title, description });
        state.totalQuantity += 1;
        state.totalAmount += parseFloat(price); // Add price for one item
      }
    },
    
    
    // state.cart.push({ id, price, image, title, description });
    checkout: (state) => {
      // Reset cart and quantities to initial state
      state.cart = [];
      state.quantities = {};
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
   
    removeItem: (state, action) => {
      const productIdToRemove = action.payload;
      const itemToRemoveIndex = state.cart.findIndex(item => item.id === productIdToRemove);
      
      if (itemToRemoveIndex !== -1) {
        const itemToRemove = state.cart[itemToRemoveIndex];
        const quantityToRemove = state.quantities[itemToRemove.id] || 0;
        
        // Remove the item from the cart
        state.cart.splice(itemToRemoveIndex, 1);
    
        // Update the total quantity and amount
        state.totalQuantity -= quantityToRemove;
        state.totalAmount -= parseFloat(itemToRemove.price) * quantityToRemove;
        
        // Reset quantity of removed item
        delete state.quantities[itemToRemove.id];
      }
    },
    
    
  },
});

export const { increment, decrement, addToCart, checkout,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
