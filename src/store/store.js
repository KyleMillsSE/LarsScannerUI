import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/Users/users';

const store = configureStore({
    reducer: {
        users: userReducer,
    },
});

export default store;
