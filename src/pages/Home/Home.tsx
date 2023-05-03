import React from "react";
import "./Home.scss";
import dragonTiger from "../../assets/img/DT.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/game" className="home-a">
        <div className="home-a">
          <span>DRAGON vs TIGER <br/> PLAY</span>
          <div className="liquid"></div>
        </div>
      </Link>
    </div>
  );
};
