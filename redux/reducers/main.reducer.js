
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    firstWord: '',
    secondWord: '',
    isError: false,
    errorMessage: '',
    errorInput: '',
    credits: 25,
    isCreditLoaded: false,
    isIncreaseCreditModalVisible: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setFirstWord: (state, action) => {
            state.firstWord = action.payload;
            // change the error state if the was from first word  
            if (state.errorInput === 'firstWord') {
                state.isError = false;
                state.errorMessage = '';
                state.errorInput = '';
            }
        },
        setSecondWord: (state, action) => {
            state.secondWord = action.payload;
            // change the error state if the was from second word
            if (state.errorInput === 'secondWord') {
                state.isError = false;
                state.errorMessage = '';
                state.errorInput = '';
            }
        },
        setError: (state, action) => {
            state.isError = true;
            state.errorMessage = action.payload.errorMessage;
            state.errorInput = action.payload.errorInput;
        },
        clearError: (state) => {
            state.isError = false;
            state.errorMessage = '';
            state.errorInput = '';
        },
        useCredit: (state) => {
            if (state.credits > 0) {
                AsyncStorage.setItem('ambigram-credits', JSON.stringify(state.credits - 1));
                state.credits -= 1;
            } else {
                state.isIncreaseCreditModalVisible = true;
            }
        },
        setCredit: (state, action) => {
            state.credits = action.payload;
        },

        increaseCredit: (state) => {
            AsyncStorage.setItem('ambigram-credits', JSON.stringify(state.credits + 5));
            state.credits += 5;
            state.isIncreaseCreditModalVisible = false;
        },

        // reset credit loading state
        resetCreditModalState: (state) => {
            state.isIncreaseCreditModalVisible = false;
        },
        handleValidation: (state) => {
            if (state.firstWord.length > 0 && state.secondWord.length > 0) {
                if (state.firstWord.length !== state.secondWord.length) {
                    state.isError = true;
                    state.errorMessage = 'Both words must be the same length';
                    state.errorInput = 'secondWord';
                } else {
                    state.isError = false;
                    state.errorMessage = '';
                    state.errorInput = '';
                }
            } else {
                state.isError = false;
                state.errorMessage = '';
                state.errorInput = '';
            }

            // cannot contain special characters (numbers, symbols, etc)
            if (state.secondWord.length > 0 && !/^[a-zA-Z]+$/.test(state.secondWord)) {
                // if it contains numbers
                if (/[0-9]/.test(state.firstWord) || /[0-9]/.test(state.secondWord)) {
                    state.isError = true;
                    state.errorMessage = 'Cannot contain numbers';
                    state.errorInput = 'secondWord';
                } else {
                    state.isError = true;
                    state.errorMessage = 'Cannot contain special characters';
                    state.errorInput = 'secondWord';
                }
            }

            if (state.firstWord.length > 0 && !/^[a-zA-Z]+$/.test(state.firstWord)) {
                // if it contains numbers
                if (/[0-9]/.test(state.firstWord) || /[0-9]/.test(state.secondWord)) {
                    state.isError = true;
                    state.errorMessage = 'Cannot contain numbers';
                    state.errorInput = 'firstWord';
                } else {
                    state.isError = true;
                    state.errorMessage = 'Cannot contain special characters';
                    state.errorInput = 'firstWord';
                }
            }
        }

    },
});

export const { setFirstWord, setSecondWord, setError, clearError, handleValidation, useCredit, setCredit, resetCreditModalState, increaseCredit } = mainSlice.actions;

export default mainSlice;