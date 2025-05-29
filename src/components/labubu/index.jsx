// components/LabubuCard.jsx
import React, { useState } from "react";
import "../index.scss";
import { Button } from "../button.components";
import { SiSolana } from "react-icons/si";

const rarityColors = {
  epic: "linear-gradient(45deg, #9d50bb, #6e48aa)",
  legendary: "linear-gradient(45deg, #f7971e, #ffd200)",
  mythical: "linear-gradient(45deg, #f953c6, #b91d73)",
  rare: "linear-gradient(45deg, #43cea2, #185a9d)",
  uncommon: "linear-gradient(45deg, #30cfd0, #330867)",
};

const LabubuCard = ({ data, exchangeRate, showUSD }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const {
    name,
    image,
    priceUSD,
    lore,
    stock,
    rarity,
    popularity,
    liveWatchers,
  } = data;
  const priceSOL = (priceUSD / exchangeRate).toFixed(2);
  const rarityKey = rarity?.toLowerCase();

  const buyLabubu = () => {
    setIsBuying(true);
    setTimeout(() => {
      setIsBuying(false);
      setIsOpen(false);
      alert(
        `You bought ${name} for ${showUSD ? `$${priceUSD}` : `${priceSOL} ◎`}`
      );
    }, 1000); // Simulate a purchase delay
  };

  return (
    <>
      <div className="labubu-card" onClick={() => setIsOpen(true)}>
        <div className="image-wrapper">
          <img src={image} alt={name} className="labubu-image" />
        </div>
        <div className="card-body">
          <h3>{name}</h3>
          <p className="price">
            {showUSD ? (
              `$${priceUSD}`
            ) : (
              <span className="df aic gap-5">
                {priceSOL} <SiSolana />
              </span>
            )}
          </p>
          <p className="stock">
            {stock > 0 ? `🧸 In Stock: ${stock}` : "🚫 Sold Out"}
          </p>
          <p className="watchers">👀 {liveWatchers} people viewing</p>
          <span className="badge popularity-badge">{popularity}</span>
        </div>
        <i
          data-text={rarity}
          style={{
            "--badge-gradient":
              rarityColors[rarityKey] ||
              "linear-gradient(45deg, #e44c8b, #fcb045)",
          }}
        ></i>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <figure
              className={`df fdc aic gap-20 modal-image ${
                isBuying ? "buying" : ""
              }`}
            >
              {isBuying && (
                <h2 className="buying-text">
                  You are buy <br />
                  {name}
                </h2>
              )}
              <img src={image} alt={name} className="w100 image" />
            </figure>
            {!isBuying && (
              <div className="modal-details">
                <h2>{name}</h2>
                <p>{lore}</p>
                <ul className="specs">
                  <li>
                    <strong>Price:</strong>{" "}
                    {showUSD ? `$${priceUSD}` : `${priceSOL} ◎`}
                  </li>
                  <li>
                    <strong>Rarity:</strong> {rarity}
                  </li>
                  <li>
                    <strong>Popularity:</strong> {popularity}
                  </li>
                  <li>
                    <strong>Live Watchers:</strong> {liveWatchers}
                  </li>
                  <li>
                    <strong>Stock:</strong> {stock}
                  </li>
                </ul>
                <div className="df aic gap-10">
                  <Button className="mt-10" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                  <Button className="df aic gap-10 mt-10" onClick={buyLabubu}>
                    Buy{" "}
                    <svg class="cartIcon" viewBox="0 0 576 512">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LabubuCard;
