import { createSlice } from "@reduxjs/toolkit";


export const ambigramFontReducer = createSlice({
    name: 'fonts',
    initialState: {
        selectedBucketName: 'ambigram-font-1',
        fontData: [
            {
                name: 'Antioglyph',
                id: '1',
                selected: true,
                bucketName: 'ambigram-font-1',
            },
            {
                name: 'Escheresque',
                id: '2',
                selected: false,
                bucketName: 'ambigram-font-2',
            },
            {
                name: 'Mimetismo',
                id: '3',
                selected: false,
                bucketName: 'ambigram-font-3',
            },
            {
                name: 'Reverberante',
                id: '4',
                selected: false,
                bucketName: 'ambigram-font-4',
            },
            {
                name: 'Antipodian',
                id: '5',
                selected: false,
                bucketName: 'ambigram-font-5',
            },
            {
                name: 'Illusione',
                id: '6',
                selected: false,
                bucketName: 'ambigram-font-6',
            },
            {
                name: 'Esthetirio',
                id: '7',
                selected: false,
                bucketName: 'ambigram-font-7',
            }
        ],
    },
    reducers: {
        setFont: (state, action) => {
            // set the selected font bucket name
            state.selectedBucketName = state.fontData.find(item => item.id === action.payload).bucketName;
            state.fontData.map((item) => {
                if (item.id === action.payload) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            });
        },
    },
});


export const {
    setFont,
} = ambigramFontReducer.actions;

export default ambigramFontReducer;