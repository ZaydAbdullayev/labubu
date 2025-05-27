// src/components/ActivityFeed.jsx
import { useEffect, useState } from "react";
import "../index.scss";

const initialMessages = [
  {
    emoji: "🛒",
    text: "Someone just bought 'Fall in Wild Labubu'!",
    badge: "Purchase",
  },
  {
    emoji: "🔥",
    text: "Trend Alert: 'Jump for Joy Labubu' is going viral!",
    badge: "Trending",
  },
  {
    emoji: "🎯",
    text: "A collector from Tokyo added 3 Labubus to cart",
    badge: "Collector",
  },
  {
    emoji: "💨",
    text: "Only 1 'Best of Luck Labubu' left in stock!",
    badge: "Limited",
  },
  {
    emoji: "👀",
    text: "4 people are watching 'Time to Chill Labubu' right now",
    badge: "Live",
  },
  {
    emoji: "🎁",
    text: "Mystery Box claimed by a user from Germany!",
    badge: "Mystery Win",
  },
  {
    emoji: "🌟",
    text: "New 'Dress Be Latte Labubu' just arrived in stock!",
    badge: "New Arrival",
  },
  {
    emoji: "🚀",
    text: "Exclusive 'Labubu Collector's Badge' coming soon!",
    badge: "Coming Soon",
  },
  {
    emoji: "💬",
    text: "Join our Discord for exclusive Labubu updates!",
    badge: "Community",
  },
  {
    emoji: "🎉",
    text: "Celebrate our 1st anniversary with special discounts!",
    badge: "Anniversary",
  },
  {
    emoji: "💌",
    text: "Subscribe to our newsletter for exclusive offers!",
    badge: "Newsletter",
  },
  {
    emoji: "🌈",
    text: "Explore our new Labubu merchandise line!",
    badge: "Merchandise",
  },
  {
    emoji: "🎈",
    text: "Join us for our Labubu virtual event next month!",
    badge: "Event",
  },
  {
    emoji: "🛍️",
    text: "Don't miss out on our limited-time Labubu sale!",
    badge: "Sale",
  },
  {
    emoji: "🎁",
    text: "Surprise giveaways happening every week!",
    badge: "Giveaway",
  },
  {
    emoji: "🌟",
    text: "Exclusive Labubu art prints available now!",
    badge: "Art Print",
  },
  {
    emoji: "💖",
    text: "Thank you for being a part of the Labubu community!",
    badge: "Community Love",
  },
];

const ActivityFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % initialMessages.length);
        setVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { emoji, text, badge } = initialMessages[currentIndex];

  return (
    <div className="activity-feed">
      <div className={`activity-item ${visible ? "fade-in" : "fade-out"}`}>
        <span className="emoji">{emoji}</span>
        <span className="message">{text}</span>
        <span className="badge">{badge}</span>
      </div>
    </div>
  );
};

export default ActivityFeed;

export const Star = () => {
  return (
    <div className="star">
      <svg
        className="svg-icon"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z"></path>
      </svg>
      <div className="star__star">
        <div className="star-eight"></div>
      </div>

      <div></div>
    </div>
  );
};
