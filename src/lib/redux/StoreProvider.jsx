"use client";
import { store } from '@/lib/redux/store';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
