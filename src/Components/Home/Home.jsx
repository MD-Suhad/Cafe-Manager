import React from 'react';
import './Home';

const Home = () => {
   return (
      <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <section>
        <h2>Welcome to Our Website</h2>
        <p>This is the main content of the homepage.</p>
      </section>
    </header>
   );
};

export default Home;