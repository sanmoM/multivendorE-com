'use client';

import { useEffect, useState } from "react";
import { CgCoffee } from "react-icons/cg";
import { PiBowlFood } from "react-icons/pi";
// import TabButton from "./components/TabButton";
import TabButton from "@/components/shared/tab-button/TabButton";
import { resellers, shops } from "@/data";
import useAxios from "@/hooks/useAxios";
import CategoryTabContents from "./components/tab-components/CategoryTabContents";
import ResellerTabContents from "./components/tab-components/ResellerTabContents";
import ShopTabContents from "./components/tab-components/ShopTabContents";

const tabItems = {
    category: [
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
    ],
}

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
    const [shops, setShops] = useState([]);
    const axios = useAxios();
    console.log(shops)
    useEffect(() => {
        axios.get("/categories").then((res) => {
            setCategories(res?.data?.categories);
        });
        axios.get("/vendor-show").then((res) => {
            setShops(res?.data?.data);
        });
    }, [])

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
                activeTab === 'shop' && <ShopTabContents shops={shops} />
            }

            {
                activeTab === 'reseller' && <ResellerTabContents resellers={resellers} />
            }
        </div>
    );
}

