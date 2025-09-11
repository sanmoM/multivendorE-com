import RatingStars from '@/components/shared/rating-stars/RatingStars';
import useAuthAxios from '@/hooks/useAuthAxios';
import { timeAgo } from '@/utils/date-format';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { GoThumbsdown, GoThumbsup } from "react-icons/go";

export default function SingleReviewCard({ review, likesAndDislikes, id }) {
    const queryClient = useQueryClient();
    const axios = useAuthAxios();
    const likeAndDislikeMutation = useMutation({
        mutationFn: async (postData) => {
            const { data } = await axios.post(`/reviews/${id}/react`, postData);
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(["likes-and-dislikes", id]);
            queryClient.invalidateQueries(["reviews", id]);
        },
    });
    const handleLike = async () => {
        const { data } = await likeAndDislikeMutation.mutateAsync({
            reaction: "like"
        });
        return data;
    };

    const handleDislike = async () => {
        const { data } = await likeAndDislikeMutation.mutateAsync({
            reaction: "dislike"
        });
        return data;
    };
    return (
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
                    <GoThumbsup className="h-6 w-6 cursor-pointer" onClick={() => handleLike()} />
                    <span>{likesAndDislikes?.likes_count || 0}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <GoThumbsdown className="h-6 w-6 cursor-pointer" onClick={() => handleDislike()} />
                    <span>{likesAndDislikes?.dislikes_count || 0}</span>
                </div>
            </div>
        </div>
    )
}
