import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from "redux-persist/lib/storage";
import cartSlice from './features/cartSlice';
import userSlice from './features/userSlice';

const cartConfig = {
    key: 'cart',
    storage,
}

const cartPersistReducer = persistReducer(cartConfig, cartSlice);
export const store = configureStore({
    reducer: {
        cart: cartPersistReducer,
        user: userSlice,
    },
})

const persistor = persistStore(store)
export { persistor };
