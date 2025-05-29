// src/App.jsx
import React, { useState, useEffect } from "react";
import "./home.css";
import { labubuData } from "./context/data";
import ActivityFeed, { Star } from "./components/activity-feed";
import LabubuCard from "./components/labubu";
import gift from "./assets/ms.png";
import { RiTwitterXFill } from "react-icons/ri";
import { Button } from "./components/button.components";

export function App() {
  const [exchangeRate, setExchangeRate] = useState(18.5); // 1 SOL = 18.5 USD
  const [showUSD, setShowUSD] = useState(false);
  const [mysteryOpened, setMysteryOpened] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const toggleCurrency = () => setShowUSD(!showUSD);

  useEffect(() => {
    const queue = [
      "⚡ A collector just grabbed a rare Labubu!",
      "🎯 Someone from Berlin added 3 Labubus to their cart!",
      "💎 'Best of Luck Labubu' is now SOLD OUT!",
      "🔥 'Jump for Joy Labubu' is trending right now!",
      "🎁 Mystery Box opened by a user from Paris!",
      "👀 5 people are viewing 'Time to Chill Labubu' right now!",
      "🛒 New stock of 'Dress Be Latte Labubu' just arrived!",
      "🌟 'Fall in Wild Labubu' is now available for pre-order!",
      "🚀 Exclusive 'Labubu Collector's Badge' coming soon!",
      "🎉 Join our community on Discord for exclusive updates!",
      "💬 Share your Labubu collection on social media with #LabubuLove!",
      "📈 Real-time rarity tracking now available!",
      "🌍 SolBubuMart now ships worldwide!",
      "🛍️ New arrivals: 'Labubu in Wonderland' series!",
      "🎊 Celebrate our 1st anniversary with special discounts!",
      "💌 Subscribe to our newsletter for exclusive offers!",
      "🎨 Custom Labubu designs coming soon!",
      "🧸 Collect all 5 Labubu from the 'Monsters' series!",
      "🎁 Special edition Labubu available for a limited time!",
      "🌟 Join our Labubu fan club for exclusive perks!",
      "🎉 Celebrate the launch of our new Labubu series!",
      "💖 Thank you for being a part of the Labubu community!",
      "🌈 Explore our new Labubu merchandise line!",
      "🎈 Join us for our Labubu virtual event next month!",
      "🛒 Don't miss out on our limited-time Labubu sale!",
      "🎁 Surprise giveaways happening every week!",
      "🌟 Exclusive Labubu art prints available now!",
      "🎉 Join our Labubu collectors' club for exclusive content!",
      "💬 Share your Labubu stories with us on social media!",
      "🧸 New Labubu plushies launching next week!",
      "🎨 Labubu art contest winners announced soon!",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < queue.length) {
        setNotifications((prev) => [...prev, queue[index]]);
        setTimeout(() => {
          setNotifications((prev) => prev.slice(1));
        }, 4000);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const openMysteryBox = () => {
    setMysteryOpened(true);
    setTimeout(() => {
      setNotifications((prev) => [...prev, "🎉 You got: Jump for Joy Labubu!"]);
      setMysteryOpened(false);
    }, 2000);
  };

  return (
    <div className="store-wrapper">
      <header className="store-header">
        <h1>SolBubuMart</h1>
        <div className="df aic gap-15">
          <Button
            onClick={() => window.open("https://x.com/SolBubuMart", "_blank")}
            className="df aic gap-10"
          >
            Contact US <RiTwitterXFill />
          </Button>

          <Button onClick={toggleCurrency}>
            {showUSD ? "Show in SOL" : "Show in USD"}
          </Button>
        </div>
      </header>

      <ActivityFeed />

      <div className="labubu-grid">
        {labubuData.map((item) => (
          <LabubuCard
            key={item.id}
            data={item}
            exchangeRate={exchangeRate}
            showUSD={showUSD}
          />
        ))}
      </div>
      <div className="mystery-box">
        <h2>🎁 Mystery Box</h2>
        <img src={gift} alt="Mystery Box" className="mystery-image" />
        <p>Pay 1.5 SOL to receive a random exclusive Labubu!</p>
        <Button
          className="mystery-btn"
          onClick={openMysteryBox}
          disabled={mysteryOpened}
        >
          {mysteryOpened ? "Opening..." : "Open Box"}
        </Button>
      </div>
      <section className="labubu-section">
        <div className="labubu-info-block">
          <h3>About SolBubuMart</h3>
          <p>
            We are a fictional yet passionate collective dedicated to spreading
            Labubu joy worldwide. Our store operates on Solana and updates
            prices in real-time with SOL exchange.
          </p>
        </div>
        <div className="labubu-info-block">
          <h3>Features & Innovations</h3>
          <ul>
            <li>🎁 Mystery Box Mode: Win a random Labubu in 1.5 SOL!</li>
            <li>📈 Rarity Tracking System with real-time analytics</li>
            <li>🔗 Cross-chain collectible badge support (coming soon)</li>
          </ul>
        </div>
        <div className="labubu-info-block">
          <h3>Our Branches</h3>
          <p>
            🏙 Tokyo, 🇫🇷 Paris, 🇺🇸 New York, 🇸🇬 Singapore
            <br />
            Coming soon to: Berlin, Seoul, São Paulo
          </p>
        </div>
      </section>

      <footer className="store-footer">
        <p>© 2025 SolBubuMart. All rights reserved.</p>
        <small>
          Powered by the love of collectors. SOL-powered & imagination-fueled.
        </small>
      </footer>

      <div className="notification-container">
        {notifications.map((msg, idx) => (
          <div key={idx} className="notification-pop">
            {msg}
          </div>
        ))}
      </div>
      <i></i>
    </div>
  );
}
