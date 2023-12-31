import { createSlice } from "@reduxjs/toolkit";


export const themeReducer = createSlice({
    name: 'theme',
    initialState: {
        themeMode: 'light',

        lightthemeColors: {
        },

        darkthemeColors: {
        }
    },
    reducers: {
        changetheme: (state) => {
            if (state.themeMode === 'light') {
                state.themeMode = 'dark';
            } else {
                state.themeMode = 'light';
            }
        },
    },
});

export const { changetheme } = themeReducer.actions;
export default themeReducer;