import React, { useState } from 'react';

const DateAndTimeInput = () => {
    const [dateTime, setDateTime] = useState('');

    return (
        <div className="flex items-center justify-center font-sans ">
            <div className="relative w-full">
                <input
                    type="datetime-local" // Changed to datetime-local for native date and time picker
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    placeholder="Select Date and Time" // Placeholder might not be visible on all browsers for date inputs
                    className="w-full pl-4 pr-10 py-2 lg:py-4 border !border-secondary/50 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200"
                />
            </div>
        </div>
    );
};

export default DateAndTimeInput;
