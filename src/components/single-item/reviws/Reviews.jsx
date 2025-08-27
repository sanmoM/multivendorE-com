import RatingStars from '@/components/shared/rating-stars/RatingStars';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';

const Reviews = ({ id }) => {

  const [ratingDetails, setRatingDetails] = useState({});
  const axios = useAxios();

  useEffect(() => {
    const fetchRatingDetails = async () => {
      const response = await axios.get(`/product/${id}/reviews-summary`);
      setRatingDetails(response.data);
    };

    fetchRatingDetails();
  }, [id, axios]);

  console.log(ratingDetails, "ratingDetails");

  const totalRating = ratingDetails?.average_rating || 0;
  const totalReviews = ratingDetails?.total_reviews || 0;
  const ratingBreakdown = Object.entries(ratingDetails?.rating_summary || {}).map(([key, value]) => {
    
    return {star: key, percentage: value?.percentage || 0};
  });
  // console.log(result)
  return (
    <div className=" max-w-2xl w-full mt-8" id='reviews'>
      {/* <h2 className="text-xl font-semibold text-gray-800 mb-6">Reviews</h2> */}
      <PrimaryTitle title={"Reviews"} className={"mb-6"} />

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Overall Rating Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          <p className="text-5xl font-bold text-gray-900 mb-2">{totalRating}</p>
          {/* {renderStars(totalRating)} */}
          <div>
            <RatingStars rating={totalRating} />
          </div>
          <p className=" text-primary mt-2">{totalReviews} reviews</p>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="w-full md:w-2/3 space-y-6">
          {ratingBreakdown.map((item) => (
            <div key={item?.star} className="flex items-center">
              <span className="text-sm font-medium text-gray-800 w-6">{item?.star}</span>
              <div className="flex-grow bg-tertiary rounded-full h-2.5">
                <div
                  className="bg-orange-400 h-2.5 rounded-full"
                  style={{ width: `${item?.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 ml-3 w-8 text-right">{item?.percentage}%</span>
              {console.log(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;


