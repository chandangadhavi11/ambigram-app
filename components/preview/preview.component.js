import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Label } from '../../ui/label.ui';
import { Dimensions } from 'react-native';


const PreviewSection = (
    {
        ambigramData = [],
        isError = true,
    }
) => {
    const screenHeight = Dimensions.get('screen').height;
    const { selectedColor } = useSelector(state => state.color);
    return (
        <View
            style={{
                width: '100%',
                height: screenHeight > 850 ? 240 : 200,
                backgroundColor: selectedColor.hex,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {
                ambigramData.length > 0 ?
                    <>
                        {/* <Label>CHANDAN</Label> */}
                    </> : <>
                        <Label>Press Generate to create ambigram</Label>
                    </>
            }
        </View>
    );
};

export default PreviewSection;
