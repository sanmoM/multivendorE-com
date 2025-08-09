import HorizontalCard from '@/components/shared/horizontal-card/HorizontalCard';
import RatingStars from '@/components/shared/rating-stars/RatingStars';
import SectionTitle from '@/components/shared/section-title/SectionTitle';

const SellerStatistics = () => {
    const stats = [
        { label: 'Total Sales', value: '$12,500', trend: '+12%' },
        { label: 'Orders', value: '325', trend: '-5%' },
        { label: 'Avg. Order Value', value: '$38.46', trend: '+8%' },
    ];

    const topSellingProducts = [
        {
            name: 'Chocolate Fudge Cake',
            category: 'Cakes',
            image: '/images/product/product-1.svg',
        },
        {
            name: 'Organic Baby Lotion',
            category: 'Baby Care',
            image: '/images/product/product-2.svg',
        },
        {
            name: 'Homemade Chicken Soup',
            category: 'Food',
            image: '/images/product/product-3.svg',
        },
    ];

    const reviewBreakdown = [
        { rating: 5, percentage: 50 },
        { rating: 4, percentage: 35 },
        { rating: 3, percentage: 10 },
        { rating: 2, percentage: 3 },
        { rating: 1, percentage: 2 },
    ];

    // Helper function to generate a smooth wave path for the SVG graph.
    // This function creates a series of curves to simulate a line graph.
    const getWavePath = (points) => {
        let path = `M 0,${30 - points[0]}`;
        for (let i = 1; i < points.length; i++) {
            const x1 = ((i - 1) * 25) + 12.5; // Control point 1 x
            const y1 = 30 - points[i - 1]; // Control point 1 y
            const x2 = (i * 25) - 12.5; // Control point 2 x
            const y2 = 30 - points[i]; // Control point 2 y
            const x = i * 25; // End point x
            const y = 30 - points[i]; // End point y
            path += ` C ${x1},${y1} ${x2},${y2} ${x},${y}`;
        }
        return path;
    };

    // Generate some random points to create a dynamic-looking graph
    const salesData = [10, 8, 12, 5, 15, 10, 18, 13, 20];
    const pathData = getWavePath(salesData);

    return (
        <div className=" space-y-6 lg:space-y-10 my-6 lg:my-12">

            {/* Top Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="rounded-lg shadow-sm p-5 border !border-secondary">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.label}</h3>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-xs mt-1 ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.trend}
                        </p>
                    </div>
                ))}
            </div>

            {/* Sales Trend */}
            <section className="">
                <SectionTitle title={"Sales Trend"} className={"mb-4"} />
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="lg:text-lg font-medium text-gray-900">
                            $12,500
                        </p>
                        <p className="text-sm text-secondary">
                            Last 30 Days <span className="text-green-600">+12%</span>
                        </p>
                    </div>
                </div>
                {/* Wave-shaped graph */}
                <div className="h-40 relative mb-4 border !border-secondary rounded-xl">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
                        <path
                            d={pathData}
                            fill="none"
                            stroke="#856161"
                            strokeWidth="0.5"
                        />
                    </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                    <span>1W</span>
                    <span>2W</span>
                    <span>3W</span>
                    <span>4W</span>
                </div>
            </section>

            {/* Top Selling Products */}
            <section className="">
                {/* <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Selling Products</h2> */}
                <SectionTitle title={"Top Selling Products"} className={"mb-4"} />
                <div className="space-y-4">
                    {topSellingProducts.map((product, index) => (
                        <HorizontalCard item={{ image: product.image, title: product.name, text2: product.category }} />
                    ))}
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="">
                <SectionTitle title={"Customer Reviews"} className={"mb-4"} />
                <div className="flex items-start space-x-6 mb-4">
                    <div className="flex flex-col items-center flex-shrink-0 gap-2">
                        <p className="text-5xl font-bold text-gray-900">4.6</p>
                        <div className="flex text-yellow-400 text-sm">
                            <RatingStars />
                        </div>
                        <p className="text-sm lg:text-lg text-primary font-semibold">150 reviews</p>
                    </div>
                    <div className="flex-grow space-y-2">
                        {reviewBreakdown.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-600 flex-shrink-0 w-4">{item.rating}</span>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gray-800 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                                </div>
                                <span className="text-sm text-gray-500 flex-shrink-0 w-10 text-right">{item.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SellerStatistics;
