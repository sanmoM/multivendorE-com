'use client';

import { useEffect, useState } from "react";
import TabButton from "@/components/shared/tab-button/TabButton";
import { resellers } from "@/data";
import useAxios from "@/hooks/useAxios";
import CategoryTabContents from "./components/tab-components/CategoryTabContents";
import ResellerTabContents from "./components/tab-components/ResellerTabContents";
import ShopTabContents from "./components/tab-components/ShopTabContents";


const tabs = [
    {
        text: 'Category',
        value: 'category'
    },
    {
        text: 'Shop',
        value: 'shop'
    },
    {
        text: 'Reseller',
        value: 'reseller'
    }
]

export default function BrowseSection() {

    const [activeTab, setActiveTab] = useState('category');
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const axios = useAxios();
    useEffect(() => {
        const fetchData = async () => {
            // const res = await axios.get("/categories");
            // setCategories(res?.data?.categories);
            const [category, location] = await Promise.all([
                axios.get("/categories"),
                // axios.get("/api/locations"),
            ]);
            setCategories(category?.data?.categories);
            // setLocations(location.data);
        };
        fetchData();
    }, [])


    console.log(categories, "categories")
    return (
        <div className="mt-2 md:mt-8 max-w-[calc(1280px+2rem)] mx-auto">
            {/* Tabs Section */}
            <div className="flex justify-around border-b !border-secondary mb-6">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.value}
                        text={tab.text}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        value={tab.value}
                    />
                ))}
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

