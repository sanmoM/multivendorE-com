import FallbackImage from '../fallback-image/FallbackImage';

export default function HorizontalCard({ item, isLoading }) {
    return (
        <>
            {
                isLoading ? <div className="flex items-center space-x-4 animate-pulse">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-gray-300 rounded-md" />

                    <div className="flex flex-col space-y-2">
                        {/* Title */}
                        <div className="w-32 h-4 bg-gray-300 rounded" />
                        {/* Line 1 */}
                        <div className="w-24 h-3 bg-gray-200 rounded" />
                        {/* Line 2 */}
                        <div className="w-20 h-3 bg-gray-200 rounded" />
                        {/* Line 3 */}
                        <div className="w-28 h-3 bg-gray-200 rounded" />
                    </div>
                </div> : <div className="flex items-center space-x-4">
                    <FallbackImage
                        src={item?.image}
                        alt={"image"}
                        className="w-20 h-20 rounded-md object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/E0E0E0/808080?text=Item"; }}
                        height={40}
                        width={40}
                    />
                    <div>
                        {item?.title && <h4 className="font-semibold text-primary">{item?.title}</h4>}
                        {item?.text2 && <p className="text-secondary">{item?.text2}</p>}
                        {item?.text3 && <p className=" text-secondary">{item?.text3}</p>}
                        {item?.text3 && <p className=" text-secondary">{item?.text4}</p>}
                    </div>
                </div>
            }
        </>

    )
}
