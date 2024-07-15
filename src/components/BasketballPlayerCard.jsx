import React from 'react';
import '../styles/BasketballPlayerCard.css';

// This is the Component of BasketballPlayerCard
// and here i do object destructring in props.
// this is my portfolio link
// www.sakweb.netlify.app
const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;