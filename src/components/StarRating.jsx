import React from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";
import { useState } from "react";
import { PiNutFill } from "../../node_modules/react-icons/pi/index.esm";
import { BsNutFill } from "../../node_modules/react-icons/bs/index.esm";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      <h1> Rating </h1>
      {/* create untitled array of 5 values  */}

      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className="star"
              color={ratingValue <= rating || hover ? "#FFB627" : ""}
              key={i}
              size={100}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
