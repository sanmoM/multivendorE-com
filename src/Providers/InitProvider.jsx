"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function InitProvider({ children }) {
    const dispatch = useDispatch();
    // useEffect
    return (
        <div>
            {children}
        </div>
    )
}