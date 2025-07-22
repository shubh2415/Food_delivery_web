import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import Banner from '../components/Home/Banner'; 
import DishesSection from '../components/Home/DishesSection';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <DishesSection />      
      <h1>Welcome to FoodExpress</h1>
      <p>Delicious food delivered to your doorstep!</p>
      <Footer />
    </div>
  );
}

export default Home;
