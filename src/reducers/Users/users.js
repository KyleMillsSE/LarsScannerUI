import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usernameSet(state, action) {
            state.username = action.payload;
        },
        usernameGet(state, action) {
            return {...state}
        }
    }
});

export const { usernameSet, usernameGet } = userSlice.actions;

export default userSlice.reducer;
