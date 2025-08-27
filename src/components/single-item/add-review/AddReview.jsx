import React, { useState } from 'react'
import RatingInput from './components/rating-input/RatingInput';

export default function AddReview() {
    const [rating, setRating] = useState(0);
    return (
        <div>
            <RatingInput value={rating} setRating={setRating} />
        </div>
    )
}
