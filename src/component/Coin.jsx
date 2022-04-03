import React from "react";
import "./Coin.css";

function Coin({ name, image, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div className="coin-container">
      <div className="coin-card">
        <div className="coin">
          <h1 className="coin-name">{name}</h1>
          <img src={image} alt="crypto coin" />
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percentage red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percentage green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
