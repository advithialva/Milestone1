import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1 style={{ color: "black", fontFamily: "Roboto, sans-serif", fontWeight: 700 }}>Coastal Delights</h1>
        <p style={{ color: "black", fontFamily: "sans-serif" }}>Where Tradition Meets Taste</p>
        <Link to="/menu">
          <button> Order Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
