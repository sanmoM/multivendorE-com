
// Function to render star icons based on rating
const RatingStars = ({ rating }) => {
    const stars = [];
    // Loop for the first 4 stars, applying full/half/empty logic
    for (let i = 1; i <= 4; i++) {
        if (rating >= i) { // Full star
            stars.push(
                <svg key={i} className="h-5 w-5 text-orange-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.332 9.306l8.332-1.151L12 .587z" />
                </svg>
            );
        } else if (rating >= i - 0.5) { // Half star
            stars.push(
                <svg key={i} className="h-5 w-5 text-orange-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896v-18.309z" />
                </svg>
            );
        } else { // Empty star (filled)
            stars.push(
                <svg key={i} className="h-5 w-5 !text-orange-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.332 9.306l8.332-1.151L12 .587z" />
                </svg>
            );
        }
    }
    // Always add the 5th star as an empty star with stroke and transparent fill
    stars.push(
        <svg
            key={5}
            className="h-5 w-5 text-orange-400 !stroke-current" // text-gray-300 sets the stroke color via currentColor
            fill="none" // Transparent fill
            stroke="currentColor" // Use currentColor for stroke
            strokeWidth="2" // Adjust stroke width if needed, default is 1
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.332 9.306l8.332-1.151L12 .587z" />
        </svg>
    );

    return (
        <div className="flex items-center gap-1">
            {stars}
        </div>
    );
};
export default RatingStars;
