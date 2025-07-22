// src/pages/MenuPage.js
import React, { useState } from 'react';
import './Menu.css'; // 👈 Make sure this line is added!

const dishes = [
  { id: 1, name: "Burger", description: "Cheesy grilled burger", price: 150, image: "/images/burger.jpg" },
  { id: 2, name: "Cold Coffee", description: "Chilled coffee delight", price: 100, image: "/images/cold.jpg" },
  { id: 3, name: "Pizza", description: "Loaded cheese pizza", price: 250, image: "/images/pizza.jpg" },
  // Add more dishes as needed
];

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [quantity, setQuantity] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantity(prev => ({ ...prev, [id]: value }));
  };

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-container">
      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      {/* Dish Cards */}
      <div className="cards-section">
        {filteredDishes.length > 0 ? (
          filteredDishes.map(dish => (
            <div key={dish.id} className="dish-card1">
              {/* Image */}
              <img src={dish.image} alt={dish.name} className="dish-image" style={{ width: "120px", height: "120px" }}/>

              {/* Description */}
              <div className="dish-details">
                <h2 className="dish-name">{dish.name}</h2>
                <p className="dish-description">{dish.description}</p>
                <p className="dish-price">₹{dish.price}</p>
              </div>

              {/* Quantity + Button */}
              <div className="dish-actions">
                <input
                  type="number"
                  min="1"
                  value={quantity[dish.id] || 1}
                  onChange={(e) => handleQuantityChange(dish.id, e.target.value)}
                  className="quantity-input"
                />
                <button className="add-button">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No matching dishes found.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
