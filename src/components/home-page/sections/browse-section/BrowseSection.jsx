'use client';

import { useEffect, useState } from "react";
import TabButton from "@/components/shared/tab-button/TabButton";
import { resellers } from "@/data";
import useAxios from "@/hooks/useAxios";
import CategoryTabContents from "./components/tab-components/CategoryTabContents";
import ResellerTabContents from "./components/tab-components/ResellerTabContents";
import ShopTabContents from "./components/tab-components/ShopTabContents";
import Tabs from "@/components/shared/Tabs/Tabs";
import FoodTabContents from "./components/tab-components/FoodTabContents";

export default function BrowseSection() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('category');
    const [categories, setCategories] = useState(Array(5).fill(null));
    const [locations, setLocations] = useState([]);
    const axios = useAxios();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [category, location] = await Promise.all([
                    axios.get("/categories"),
                    axios.get("/show-vendor-address")
                ]);

                setCategories(category?.data?.categories || []);
                setLocations(location?.data?.address || []);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [])


    const tabs = [
        {
            label: 'Category',
            value: 'category',
            onClick: () => setActiveTab('category')
        },
        {
            label: 'Shop',
            value: 'shop',
            onClick: () => setActiveTab('shop')
        },
        {
            label: 'Food',
            value: 'food',
            onClick: () => setActiveTab('food')
        }
        // {
        //     label: 'Reseller',
        //     value: 'reseller',
        //     onClick: () => setActiveTab('reseller')
        // }
    ]


    return (
        <div className="mt-2 md:mt-8">
            {/* Tabs Section */}
            <div className="">
                <Tabs tabs={tabs} activeTab={activeTab} className={"justify-around"} />
            </div>



            {
                activeTab === 'category' && <CategoryTabContents category={categories} isLoading={isLoading} />
            }

            {
                activeTab === 'shop' && <ShopTabContents categories={categories} locations={locations} />
            }

            {
                activeTab === 'reseller' && <ResellerTabContents resellers={resellers} />
            }
            {
                activeTab === 'food' && <FoodTabContents />
            }
        </div>
    );
}

