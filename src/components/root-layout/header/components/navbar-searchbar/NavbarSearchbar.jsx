"use client"

import useAxios from '@/hooks/useAxios';
import { cn } from '@/utils/cn';
import { debounce } from '@/utils/debounce';
import { useCallback, useEffect, useState, useRef } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import SearchCard from './components/search-card/SearchCard';
import { getFormattedProduct } from '@/utils/getFormattedData';

export default function NavbarSearchbar({ inputClassName }) {
    const [query, setQuery] = useState("");
    const [searchItems, setSearchItems] = useState([]);
    const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
    const axios = useAxios();
    const containerRef = useRef(null);

    const handleSearch = useCallback(
        debounce(async (query) => {
            const res = await axios.get(`/top-search?keyword=${query}`);
            setSearchItems(res?.data?.data);
        }, 200),
        []
    );

    useEffect(() => {
        if (query) {
            handleSearch(query);
            setIsSuggestionOpen(true);
        } else {
            setSearchItems([]);
            setIsSuggestionOpen(false);
        }
    }, [query, handleSearch]);

    // Close suggestion if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsSuggestionOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
                className={cn(
                    "pl-12 pr-4 py-2 rounded-lg bg-tertiary border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200 placeholder:text-secondary w-full",
                    inputClassName
                )}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearchOutline className='w-6 h-6 text-secondary' />
            </div>

            {/* Suggestions */}
            {isSuggestionOpen && searchItems.length > 0 && (
                <div className="absolute z-10 left-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 w-max">
                    {searchItems.map((item) => (
                        <SearchCard
                            key={item.id}
                            data={getFormattedProduct(item)}
                            // ✅ Suggestion stays open when clicking a card
                            onClick={() => console.log("Clicked:", item)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
