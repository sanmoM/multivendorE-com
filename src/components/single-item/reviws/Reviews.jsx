import RatingStars from '@/components/shared/rating-stars/RatingStars';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import React from 'react';

const Reviews = () => {
  const totalRating = 4.8;
  const totalReviews = 125;
  const ratingBreakdown = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ];
  return (
    <div className=" max-w-2xl w-full mt-8">
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
            <div key={item.stars} className="flex items-center">
              <span className="text-sm font-medium text-gray-800 w-6">{item.stars}</span>
              {/* <svg className="h-4 w-4 text-orange-400 fill-current mx-2" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.332 9.306l8.332-1.151L12 .587z" />
              </svg> */}
              <div className="flex-grow bg-tertiary rounded-full h-2.5">
                <div
                  className="bg-orange-400 h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 ml-3 w-8 text-right">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;


