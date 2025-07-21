import StatsCard from "@/components/dashboard/stats-card/StatsCard";
import { statistics } from "@/data";


export default function page() {
    return (

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-2 m-4 text-center">
            {
                statistics.map((stat, index) => (
                    <StatsCard stats={stat} key={index} />
                ))
            }
        </div>
    )
}
