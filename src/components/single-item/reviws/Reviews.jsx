import RatingStars from '@/components/shared/rating-stars/RatingStars';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAxios from '@/hooks/useAxios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Reviews = ({ id, type }) => {
  const axios = useAxios();

  // Fetch function
  const fetchRatingDetails = async () => {
    const response = await axios.get(`/${type}/${id}/reviews-summary`);
    return response.data;
  };

  // Use TanStack Query
  const { data: ratingDetails, isLoading, isError } = useQuery({
    queryKey: ['product-reviews', id], // unique key per product
    queryFn: fetchRatingDetails,
    enabled: !!id, // only fetch if id exists
  });
  console.log(ratingDetails)
  // if (isLoading) {
  //   return <p>Loading reviews...</p>;
  // }

  // if (isError) {
  //   return <p>Failed to load reviews.</p>;
  // }

  const totalRating = ratingDetails?.average_rating || 0;
  const totalReviews = ratingDetails?.total_reviews || 0;

  const ratingBreakdown = Object.entries(ratingDetails?.rating_summary || {}).map(
    ([key, value]) => ({
      star: key,
      percentage: value?.percentage || 0,
    })
  );

  return (
    <div id='reviews'>
      <PrimaryTitle title="Reviews" className="mb-6" />

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Overall Rating Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          <p className="text-5xl font-bold text-gray-900 mb-2">{parseFloat(totalRating).toFixed(1)}</p>
          <div>
            <RatingStars rating={totalRating} />
          </div>
          <p className="text-primary mt-2">{totalReviews} reviews</p>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="w-full md:w-2/3 space-y-6">
          {ratingBreakdown?.map((item) => (
            <div key={item.star} className="flex items-center">
              <span className="text-sm font-medium text-gray-800 w-6">{item.star}</span>
              <div className="flex-grow bg-tertiary rounded-full h-2.5">
                <div
                  className="bg-orange-400 h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 ml-3 w-8 text-right">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
