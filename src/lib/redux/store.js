import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from "redux-persist/lib/storage";
import cartSlice from './features/cartSlice';
import userSlice from './features/userSlice';
import modalSlice from './features/modalSlice';

const cartConfig = {
    key: 'cart',
    storage,
}
const userConfig = {
    key: 'user',
    storage,
}

const cartPersistReducer = persistReducer(cartConfig, cartSlice);
const userPersistReducer = persistReducer(userConfig, userSlice);
export const store = configureStore({
    reducer: {
        cart: cartPersistReducer,
        user: userPersistReducer,
        modal: modalSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

const persistor = persistStore(store)
export { persistor };

