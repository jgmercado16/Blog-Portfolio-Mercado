import React from "react"; 

function HeroBanner() {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="logo">⚛️</div>
        <div className="nav-links">
          <a href="#home">Home</a>
            _
          <a href="#about">About</a>
        </div>
      </nav>
      <div className="hero-content">
        <h1 >Hello, I'm Jhon Emil Mercado</h1>
        <p className="center-text">"Welcome to my Page"</p>
        <p className="description">
          I'm a gamer at heart, an anime enthusiast by soul, and always ready to dive into new adventures both on-screen and off!
        </p>
      </div>
      <div className="react-logo">&#9883;</div>
    </header>
  );
}

export default HeroBanner;
