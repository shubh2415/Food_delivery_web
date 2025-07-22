import React from 'react';
import { Link } from 'react-router-dom';

const DishesSection = () => {
  const dishes = [
    { id: 1, name: "burger", image: "/images/burger.jpg"},
    { id: 2, name: "cold-cofee", image: "/images/cold.jpg" },
    { id: 3, name: "roll", image: "/images/roll.jpg" },
    { id: 4, name: "Pizza", image: "/images/pizza.jpg" },
    { id: 5, name: "burger", image: "/images/burger.jpg" },
    { id: 6, name: "cold-cofee", image: "/images/cold.jpg" },
    { id: 7, name: "roll", image: "/images/roll.jpg" },
    { id: 8, name: "pizza", image: "/images/pizza.jpg" },
    { id: 9, name: "cold", image: "/images/cold.jpg" },
    { id: 10, name: "roll", image: "/images/roll.jpg" },
  ];

  return (
    <>
      <style>
        {`
          .dishes-section {
            padding: 50px 20px;
            text-align: center;
            background-color: #fdfdfd;
          }

          .section-title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 40px;
          }

          .dishes-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
          }

          .dish-card {
            width: 150px;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-decoration: none;
            color: inherit;
          }

          .dish-card:hover {
            transform: scale(1.05);
          }

          .dish-card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .dish-card p {
            margin-top: 10px;
            font-weight: 500;
          }
        `}
      </style>

      <div className="dishes-section" style={{paddingTop: '20px'}}>
        <h2 className="section-title" style={{marginTop: '0px'}}>Our Dishes</h2>
        <div className="dishes-container">
          {dishes.map((dish) => (
            <Link to={`/dish/${dish.id}`} key={dish.id} className="dish-card">
              <img src={dish.image} alt={dish.name} />
              <p>{dish.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DishesSection;
