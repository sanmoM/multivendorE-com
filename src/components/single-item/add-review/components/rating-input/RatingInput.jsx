import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function StarRating({ max = 5, onChange, rating, setRating }) {
//   const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex">
      {Array.from({ length: max }, (_, i) => {
        const value = i + 1;
        return (
          <span
            key={value}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer text-yellow-400 transition-colors p-1"
          >
            {value <= (hover || rating) ? <AiFillStar size={28} /> : <AiOutlineStar size={28} />}
          </span>
        );
      })}
    </div>
  );
}
