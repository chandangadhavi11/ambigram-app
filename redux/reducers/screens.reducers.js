import { createSlice } from "@reduxjs/toolkit";


export const screensReducer = createSlice({
    name: 'screens',
    initialState: {
        isSplashScreen: true,

        ambigramOneLiners: [
            "Flip your perspective, not just your phone!",
            "Ambigrams: Where words do the twist and shout.",
            "Turning words upside down, just for the pun of it.",
            "Wordplay gymnastics: Let's somersault with ambigrams!",
            "Upend your language, unleash the ambigram magic!",
            "Because words deserve a double take – and a spin!",
            "Twist, turn, and laugh with ambigrams – the linguistic acrobats!",
            "Flip for fun: Where letters dance on their heads!",
            "Verbal gymnastics: Making words breakdance since [current year]!",
            "Because sometimes words like to cartwheel too!"
        ],

    },
    reducers: {
        setSplashScreen: (state, action) => {
            state.isSplashScreen = action.payload;
        },
    },
});


export const {
    setSplashScreen,
} = screensReducer.actions;
export default screensReducer;