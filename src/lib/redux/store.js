import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import storage from "redux-persist/lib/storage";
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';

const cartConfig = {
    key: 'cart',
    storage,
}

const cartPersistReducer = persistReducer(cartConfig, cartSlice);
export const store = configureStore({
    reducer: {
        cart: cartPersistReducer,
    },
})

const persistor = persistStore(store)
export { persistor }