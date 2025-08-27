"use client";

import RatingStars from '@/components/shared/rating-stars/RatingStars';
import useAxios from '@/hooks/useAxios';
import { timeAgo } from '@/utils/date-format';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GoThumbsdown, GoThumbsup } from "react-icons/go";

const reviews = [
    {
        id: 1,
        author: 'Olivia Carter',
        timeAgo: '2 weeks ago',
        rating: 5,
        comment: 'Absolutely delicious! The chocolate fudge cake was rich, moist, and the frosting was heavenly. It was a hit at our party!',
        likes: 15,
        dislikes: 2,
        avatar: '/images/profile-image.jpg',
    },
    {
        id: 2,
        author: 'Liam Hughes',
        timeAgo: '1 month ago',
        rating: 5,
        comment: 'The cake was good, but I found it a bit too sweet for my taste. The presentation was excellent, and the delivery was on time.',
        likes: 8,
        dislikes: 3,
        avatar: '/images/profile-image.jpg',
    },
];


const CustomerReviews = ({ id }) => {
    const [reviews, setReviews] = useState([]);

    const axios = useAxios();

    useEffect(() => {
        // Fetch reviews from API or any data source
        const fetchReviews = async () => {
            const response = await axios.get(`/product/${id}/reviews`);
            console.log(response)
            const data = response.data;
            setReviews(data);
        };

        fetchReviews();
    }, []);

    console.log(reviews, "reviews");
    return (
        <div className="lg:w-[70%] space-y-8 mt-12">
            {reviews.map((review) => (
                <div key={review.id} className="pb-4">
                    <div className="flex items-center mb-2">
                        <Image
                            src={"/images/profile-image.jpg"}
                            alt={review.author}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                            // onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/FFDDC1/FF8C00?text=User"; }}
                            width={40}
                            height={40}
                        />
                        <div>
                            <p className="font-semibold text-primary">{review?.customer?.first_name}</p>
                            <p className="text-sm text-secondary">{timeAgo(review?.created_at)}</p>
                        </div>
                    </div>
                    <div className="my-4">
                        {/* {renderStars(review.rating)} */}
                        <RatingStars rating={review.rating} />
                    </div>
                    <p className="text-primary font-medium leading-relaxed mb-4">{review.comment}</p>
                    <div className="flex items-center space-x-8 text-secondary text-lg">
                        <div className="flex items-center space-x-1">
                            {/* Thumbs Up Icon */}
                            <GoThumbsup className="h-6 w-6 cursor-pointer" />
                            <span>{review.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            {/* Thumbs Down Icon */}
                            <GoThumbsdown className="h-6 w-6 cursor-pointer" />
                            <span>{review.dislikes}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomerReviews;
