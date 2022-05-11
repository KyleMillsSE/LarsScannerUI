import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createSession(state, action) {
            return {
                ...action.payload,
            };
        },
    },
});

export const { createSession } = userSlice.actions;

export default userSlice.reducer;
