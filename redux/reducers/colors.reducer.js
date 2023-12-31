import { createSlice } from "@reduxjs/toolkit";


export const colorsReducer = createSlice({
    name: 'color',
    initialState: {
        listOfColors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Misty Rose", hex: "#F8D7DA" },
            { name: "Lavender Mist", hex: "#E9D8FD" },
            { name: "Ghost White", hex: "#FCF6F5" },
            { name: "Honeydew", hex: "#E3F9F0" },
            { name: "Pink", hex: "#F4A8B6" },
            { name: "Light Cyan", hex: "#D5FFFF" },
            { name: "Light Blue", hex: "#C7CEEA" },
            { name: "Pale Gray", hex: "#F0F0F3" },
            { name: "Powder Blue", hex: "#C6E2FF" },
            { name: "Gray", hex: "#B2B2B2" },
            { name: "White Smoke", hex: "#F5F5F5" },
            { name: "Light Gray", hex: "#E8EAED" },
            { name: "Snow", hex: "#EFEFEF" },
            { name: "Pink", hex: "#FFC0CB" },
            { name: "Light Cyan", hex: "#E0FFFF" },
            { name: "Light Blue", hex: "#ADD8E6" },
            { name: "Powder Blue", hex: "#B0E0E6" },
            { name: "Light Gray", hex: "#D3D3D3" },
            { name: "Light Green", hex: "#90EE90" },
            { name: "Lilac", hex: "#C8A2C8" },
            { name: "Papaya Whip", hex: "#FFEFD5" },
            { name: "Wheat", hex: "#F5DEB3" },
            { name: "Moccasin", hex: "#FFE4B5" },
            { name: "Lemon Chiffon", hex: "#FFFACD" },
            { name: "Khaki", hex: "#F0E68C" },
            { name: "Azure", hex: "#F0FFFF" },
            { name: "Lavender Blush", hex: "#FFF0F5" },
            { name: "Seashell", hex: "#FFF5EE" },
            { name: "Antique White", hex: "#FAEBD7" },
            { name: "Beige", hex: "#F5F5DC" },
            { name: "Pale Goldenrod", hex: "#EEE8AA" },
            { name: "Light Yellow", hex: "#FFFFE0" },
            { name: "Light Steel Blue", hex: "#B0C4DE" },
            { name: "Lavender", hex: "#E6E6FA" },
            { name: "Cornsilk", hex: "#FFF8DC" },
            { name: "Blanched Almond", hex: "#FFEBCD" },
            { name: "Linen", hex: "#FAF0E6" },
            { name: "Alice Blue", hex: "#F0F8FF" },
            { name: "Honeydew", hex: "#E0EEE0" },
            { name: "Old Lace", hex: "#FDF5E6" },
            { name: "Misty Rose", hex: "#FFE4E1" },
            { name: "Lavender Blush", hex: "#FFF0F5" },
            { name: "Ivory", hex: "#F5F5F0" },
            { name: "Ivory Cream", hex: "#FFFFF0" },
            { name: "Snow White", hex: "#FFFAFA" },
            { name: "Almond", hex: "#FFEBCD" },
            { name: "Peach Puff", hex: "#FFDAB9" },
            { name: "Papaya Whip", hex: "#FFEFD5" },
            { name: "Light Gray", hex: "#EAEAEA" },
            { name: "Ghost White", hex: "#F8F8FF" },
        ],

        selectedColor: {
            name: "White",
            hex: "#FFFFFF",
        }
    },
    reducers: {
        // assign the selected color to the selectedColor state
        setColor: (state, action) => {
            state.selectedColor = action.payload;
        },
    },
});

export const { setColor } = colorsReducer.actions;
export default colorsReducer;
