"use client";

import RatingStars from '@/components/shared/rating-stars/RatingStars';
import useAxios from '@/hooks/useAxios';
import { timeAgo } from '@/utils/date-format';
import Image from 'next/image';
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import { useQuery } from '@tanstack/react-query';

const CustomerReviews = ({ id, type }) => {
    const axios = useAxios();

    // Fetch function
    const fetchReviews = async () => {
        const { data } = await axios.get(`/${type === "product" ? "product" : "generalproduct"}/${id}/reviews`);
        return data;
    };

    // React Query hook
    const { data: reviews = [], isLoading, isError } = useQuery({
        queryKey: ["reviews", id], // unique per product
        queryFn: fetchReviews,
        enabled: !!id, // only run if id exists
    });



    return (
        <div className="lg:w-[70%] space-y-8 mt-12">
            {reviews?.map((review) => (
                <div key={review.id} className="pb-4">
                    <div className="flex items-center mb-2">
                        <Image
                            src={"/images/profile-image.jpg"}
                            alt={review?.customer?.first_name || "User"}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                            width={40}
                            height={40}
                        />
                        <div>
                            <p className="font-semibold text-primary">{review?.customer?.first_name}</p>
                            <p className="text-sm text-secondary">{timeAgo(review?.created_at)}</p>
                        </div>
                    </div>

                    <div className="my-4">
                        <RatingStars rating={review.rating} />
                    </div>

                    <p className="text-primary font-medium leading-relaxed mb-4">
                        {review.comment}
                    </p>

                    <div className="flex items-center space-x-8 text-secondary text-lg">
                        <div className="flex items-center space-x-1">
                            <GoThumbsup className="h-6 w-6 cursor-pointer" />
                            <span>{review.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
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
