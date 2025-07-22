// src/pages/DishDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';

const allDishes = [
  { id: 1, name: "burger", image: "/images/burger.jpg", description: "Juicy grilled burger with cheese.", price: 150 },
  { id: 2, name: "cold-coffee", image: "/images/cold.jpg", description: "Chilled cold coffee with cream.", price: 120 },
  { id: 3, name: "roll", image: "/images/roll.jpg", description: "Spicy veggie roll wrapped in soft bread.", price: 90 },
  { id: 4, name: "pizza", image: "/images/pizza.jpg", description: "Hot cheesy pizza with toppings.", price: 200 },
  { id: 5, name: "pizza", image: "/images/pizza.jpg", description: "Classic Margherita pizza.", price: 180 },
  { id: 6, name: "pizza", image: "/images/pizza.jpg", description: "Pepperoni pizza with extra cheese.", price: 220 },
  { id: 7, name: "pizza", image: "/images/pizza.jpg", description: "Veggie overload pizza.", price: 210 },
  { id: 8, name: "pizza", image: "/images/pizza.jpg", description: "Paneer tikka pizza.", price: 230 },
  { id: 9, name: "pizza", image: "/images/pizza.jpg", description: "Double cheese pizza.", price: 240 },
  { id: 10, name: "pizza", image: "/images/pizza.jpg", description: "Farmhouse pizza.", price: 250 },
  { id: 11, name: "pizza", image: "/images/pizza.jpg", description: "Spicy Mexican pizza.", price: 260 },
  { id: 12, name: "pizza", image: "/images/pizza.jpg", description: "BBQ Chicken pizza.", price: 270 },
  { id: 13, name: "pizza", image: "/images/pizza.jpg", description: "Neapolitan pizza.", price: 190 },
  { id: 14, name: "pizza", image: "/images/pizza.jpg", description: "Cheesy burst pizza.", price: 245 },
  { id: 15, name: "pizza", image: "/images/pizza.jpg", description: "Thin crust pizza.", price: 230 },
  { id: 16, name: "pizza", image: "/images/pizza.jpg", description: "Garlic pizza with herbs.", price: 220 },
  { id: 17, name: "pizza", image: "/images/pizza.jpg", description: "Four cheese pizza.", price: 280 },
  { id: 18, name: "pizza", image: "/images/pizza.jpg", description: "Mushroom pizza.", price: 210 },
  { id: 19, name: "pizza", image: "/images/pizza.jpg", description: "Capsicum & corn pizza.", price: 200 },
  { id: 20, name: "pizza", image: "/images/pizza.jpg", description: "Spicy paneer pizza.", price: 240 },
  { id: 1, name: "burger", image: "/images/burger.jpg", description: "Made by shubham.", price: 150 },
  { id: 1, name: "burger", image: "/images/burger.jpg", description: "made by ammu.", price: 150 }
];

function DishDetail() {
  const { id } = useParams();
  const selectedDish = allDishes.find(d => d.id === parseInt(id));
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [quantities, setQuantities] = useState({});

  if (!selectedDish) {
    return <h2>Dish not found</h2>;
  }

  const handleSearch = () => {
    setSearchClicked(true);
  };

  const filteredDishes = allDishes.filter(
    (dish) =>
      dish.name.toLowerCase() === selectedDish.name.toLowerCase() &&
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div><Navbar />
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>{selectedDish.name} Menu</h2>

      {/* Search Bar and Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
      }}>
        <div style={{ display: 'flex', width: '50%' }}>
          <input
            type="text"
            placeholder="Search in menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px 0 0 5px',
              border: '1px solid #ccc',
              borderRight: 'none'
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '0 5px 5px 0',
              border: '1px solid #ccc',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Dish Cards */}
      <div style={{ width: '50%', margin: '0 auto' }}>
        {filteredDishes.length === 0 && searchClicked && (
          <p style={{ textAlign: 'center' }}>No items found.</p>
        )}

        {filteredDishes.map(dish => (
          <div
            key={dish.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              gap: '15px'
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: '120px', height: '90px', borderRadius: '8px', objectFit: 'cover' }}
            />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px' }}>{dish.description}</h4>
              <p style={{ margin: 0 }}>Price: ₹{dish.price}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <input
                type="number"
                min="1"
                value={quantities[dish.id] || 1}
                onChange={(e) => handleQuantityChange(dish.id, parseInt(e.target.value))}
                style={{ width: '50px', marginBottom: '5px' }}
              />
              <br />
              <button style={{
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default DishDetail;
