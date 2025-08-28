import Button from '@/components/shared/button/Button';
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAuthAxios from '@/hooks/useAuthAxios';
import { useState } from 'react';
import RatingInput from './components/rating-input/RatingInput';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function AddReview({ id }) {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    // Define mutation
    const { mutate, isLoading } = useMutation({
        mutationFn: async () => {
            const response = await axios.post(`/product/${id}/review`, {
                rating,
                comment: review,
            });
            return response.data;
        },
        onSuccess: () => {
            toast.success("Review submitted successfully!");
            setRating(0);
            setReview("");
            // ✅ Invalidate cache so reviews re-fetch automatically
            queryClient.invalidateQueries(["product-reviews", id]);
        },
        onError: () => {
            toast.error("Error submitting review");
        },
    });

    const handleSubmit = () => {
        mutate();
    };

    return (
        <div className='p-1'>
            <PrimaryTitle title={"Add a Review"} />
            <RatingInput rating={rating} setRating={setRating} />
            <TextAreaInput
                inputClassName={"resize-none h-44 mt-4"}
                placeholder='Write your review here...'
                value={review}
                setValue={setReview}
            />
            <Button
                text={isLoading ? "Submitting..." : "Submit Review"}
                className={"mt-4"}
                onClick={handleSubmit}
                disabled={isLoading}
            />
        </div>
    );
}
