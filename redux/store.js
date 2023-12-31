import { configureStore, combineReducers } from '@reduxjs/toolkit';

import ambigramFontReducer from './reducers/font.reducer';
import colorsReducer from './reducers/colors.reducer';
import modeReducer from './reducers/mode.reducer';
import mainReducer from './reducers/main.reducer';
import mainSlice from './reducers/main.reducer';
import screensReducer from './reducers/screens.reducers';

const store = configureStore({
    reducer: combineReducers({
        screen: screensReducer.reducer,
        fonts: ambigramFontReducer.reducer,
        color: colorsReducer.reducer,
        theme: modeReducer.reducer,
        main: mainSlice.reducer,
    }),
});

export default store;