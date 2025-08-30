"use client";
import useAuthAxios from '@/hooks/useAuthAxios';
import { persistor, store } from '@/lib/redux/store';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({ children }) {
    const axios = useAuthAxios()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                await axios.get("/auth/check");
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, [axios]);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
