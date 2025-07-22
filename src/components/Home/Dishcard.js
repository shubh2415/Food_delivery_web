// src/components/DishCard.js
import React, { useState } from 'react';

const DishCard = ({ dish }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex justify-between items-center border rounded-xl p-4 my-4 w-[80%] mx-auto shadow-md">
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{dish.name}</h2>
        <p className="text-gray-600">{dish.description}</p>
        <p className="mt-2 font-bold">₹{dish.price}</p>
        <div className="flex items-center mt-2">
          <label className="mr-2">Qty:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 border rounded px-2 py-1"
          />
        </div>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
      <img src={dish.image} alt={dish.name} className="w-32 h-32 object-cover rounded-xl ml-4" />
    </div>
  );
};

export default DishCard;
