"use client";

import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import SingleReviewCard from './components/SingleReviewCard';

const CustomerReviews = ({ id, type }) => {
    const axios = useAxios();

    // Fetch function
    const fetchReviews = async () => {
        const { data } = await axios.get(`/${type === "product" ? "product" : "generalproduct"}/${id}/reviews`);
        return data;
    };

    const fetchLikesAndDislikes = async () => {
        const { data } = await axios.get(`/${type === "product" ? "product" : "generalproduct"}/${id}/reviews-react`);
        return data;
    };

    // React Query hook
    const { data: reviews = [], isLoading, isError } = useQuery({
        queryKey: ["reviews", id], // unique per product
        queryFn: fetchReviews,
        enabled: !!id, // only run if id exists
    });

    const { data: likesAndDislikes = [], isLoading: likesAndDislikesLoading, isError: likesAndDislikesError } = useQuery({
        queryKey: ["likes-and-dislikes"], // unique per product
        queryFn: fetchLikesAndDislikes,
        enabled: !!id, // only run if id exists
    });


    return (
        <div className="lg:w-[70%] space-y-8 mt-12">
            {reviews?.map((review, index) => (
                <SingleReviewCard review={review} likesAndDislikes={likesAndDislikes?.find(singleLike => singleLike.customer_id === review.customer_id)} id={review?.id} key={index} />
            ))}
        </div>
    );
};

export default CustomerReviews;
