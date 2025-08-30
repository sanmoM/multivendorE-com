'use client';

import { useEffect, useState } from "react";
import TabButton from "@/components/shared/tab-button/TabButton";
import { resellers } from "@/data";
import useAxios from "@/hooks/useAxios";
import CategoryTabContents from "./components/tab-components/CategoryTabContents";
import ResellerTabContents from "./components/tab-components/ResellerTabContents";
import ShopTabContents from "./components/tab-components/ShopTabContents";
import Tabs from "@/components/shared/Tabs/Tabs";

export default function BrowseSection() {

    const [activeTab, setActiveTab] = useState('category');
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const axios = useAxios();
    useEffect(() => {
        const fetchData = async () => {
            const [category, location] = await Promise.all([
                axios.get("/categories"),
            ]);
            setCategories(category?.data?.categories);
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
            label: 'Reseller',
            value: 'reseller',
            onClick: () => setActiveTab('reseller')
        }
    ]


    return (
        <div className="mt-2 md:mt-8">
            {/* Tabs Section */}
            <div className="">
                <Tabs tabs={tabs} activeTab={activeTab} className={"justify-around"} />
            </div>



            {
                activeTab === 'category' && <CategoryTabContents category={categories} />
            }

            {
                activeTab === 'shop' && <ShopTabContents categories={categories} locations={locations} />
            }

            {
                activeTab === 'reseller' && <ResellerTabContents resellers={resellers} />
            }
        </div>
    );
}

