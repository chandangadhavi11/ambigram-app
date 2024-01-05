import { Dimensions } from 'react-native';

export const sData = {
    INPUT_TEXT_HORIZONTAL_PADDING: 16,
    INPUT_TEXT_VERTICAL_PADDING: 12,
    INPUT_TEXT_FONT_SIZE: 10,
    LABEL_FONT_SIZE: 10,
    HEADING_FONT_SIZE: 18,

    FONT_LETTER_SPACING: 2,

    PREVIEW_SECTION_HEIGHT: 160,

    COLOR_CONTAINER_SIZE: 24,

    x12: 2,
    x16: 4,
    x24: 8,
}

export const mData = {
    INPUT_TEXT_HORIZONTAL_PADDING: 16,
    INPUT_TEXT_VERTICAL_PADDING: 12,
    INPUT_TEXT_FONT_SIZE: 10,
    LABEL_FONT_SIZE: 10,
    HEADING_FONT_SIZE: 18,

    FONT_LETTER_SPACING: 3,

    PREVIEW_SECTION_HEIGHT: 180,

    COLOR_CONTAINER_SIZE: 32,

    x12: 8,
    x16: 10,
    x24: 16,
}

export const lData = {
    INPUT_TEXT_HORIZONTAL_PADDING: 16,
    INPUT_TEXT_VERTICAL_PADDING: 16,
    INPUT_TEXT_FONT_SIZE: 12,
    LABEL_FONT_SIZE: 12,
    HEADING_FONT_SIZE: 20,

    FONT_LETTER_SPACING: 4,

    COLOR_CONTAINER_SIZE: 40,

    PREVIEW_SECTION_HEIGHT: 240,

    x12: 12,
    x16: 16,
    x24: 24,

}

export const getDimension = () => {
    const screenWidth = Dimensions.get('screen').height;
    if (screenWidth < 600) {
        return sData;
    } else if (screenWidth >= 600 && screenWidth < 840) {
        return mData;
    } else {
        return lData;
    }
}