"use client"

import useAxios from '@/hooks/useAxios';
import { cn } from '@/utils/cn';
import { debounce } from '@/utils/debounce';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import SearchCard from './components/search-card/SearchCard';
import { getFormattedProduct } from '@/utils/getFormattedData';

export default function NavbarSearchbar({ inputClassName }) {
    const [query, setQuery] = useState("");
    const [searchItems, setSearchItems] = useState([]);
    const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
    const axios = useAxios();


    const handleSearch = useCallback(
        debounce(async (query) => {
            const res = await axios.get(`/top-search?keyword=${query}`);
            setSearchItems(res?.data?.data);
        }, 500),
        []
    );

    useEffect(() => {
        if (query) {
            handleSearch(query);
        }
    }, [query, handleSearch]);

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                onFocus={() => setIsSuggestionOpen(true)}
                onBlur={() => setIsSuggestionOpen(false)}
                onChange={(e) => setQuery(e.target.value)}
                className={cn("pl-12 pr-4 py-2 rounded-lg bg-tertiary border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200 placeholder:text-secondary w-full", inputClassName)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearchOutline className='w-6 h-6 text-secondary' />
            </div>

            {/* products */}
            {
                isSuggestionOpen && searchItems.length > 0 && <div className="absolute z-10 left-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 w-max">
                    {searchItems.map((item) => (
                        <SearchCard key={item.id} data={getFormattedProduct(item)} />
                    ))}
                </div>
            }
        </div>
    )
}
