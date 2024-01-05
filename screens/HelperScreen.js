import React from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Container } from '../ui/container.ui';
import ModeButton from '../components/theme/ModeButton';
import { Heading } from '../ui/heading.ui';
import { Label } from '../ui/label.ui';
import { useDispatch, useSelector } from 'react-redux';
import AmbigramFontContainer from '../components/AmbigramFontContainer';
import { setFont } from '../redux/reducers/font.reducer';
import ColorContainer from '../components/ColorContainer';
import { setColor } from '../redux/reducers/colors.reducer';
import { BGIcon } from '../components/icons';
import InputText from '../ui/input.ui';
import Button from '../ui/button.ui';
import { getColor } from '../utils/getThemeColor';
import PreviewSection from '../components/preview/preview.component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalContainer from '../components/modal/container.modal';
import { setCredit, useCredit } from '../redux/reducers/main.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDimension } from '../data/DimensionData';


const MyForm = () => {
    const dispatch = useDispatch();
    const { fontData, selectedBucketName } = useSelector(state => state.fonts);
    const { listOfColors, selectedColor } = useSelector(state => state.color);
    const { themeMode } = useSelector(state => state.theme);
    const { firstWord, secondWord, isError, errorMessage, errorInput } = useSelector(state => state.main);

    const handleGenerateAmbigram = () => {
        //console.log("generate ambigram");
        dispatch(useCredit());
    }

    const handleClearPreview = () => {
        console.log("clear preview");
    }


    React.useEffect(() => {
        // add async storage here


        AsyncStorage.getItem('ambigram-credits').then((data) => {
            if (data === null || data === undefined) {
                AsyncStorage.setItem('ambigram-credits', JSON.stringify(25));
                dispatch(setCredit(25));
            } else {
                dispatch(setCredit(parseInt(data)));
            }
        });

        AsyncStorage.getItem('ambigram-selected-color').then((data) => {
            // console.log(data);
            if (data === null || data === undefined) {
                AsyncStorage.setItem('ambigram-selected-color', JSON.stringify(selectedColor));
            } else {
                dispatch(setColor(JSON.parse(data)));
            }
        });

    }, []);


    return (
        <KeyboardAwareScrollView
            style={{
                flex: 1,
                backgroundColor: getColor(themeMode).background,
            }}
            scrollEnabled={false}>
            <SafeAreaView>
                <Container.FullWidthSpaceBetween paddingHorizontal={24} paddingTop={getDimension().x16}>
                    <Container.Column gap={4}>
                        <Label color={getColor(themeMode).tertiary}>create your own</Label>
                        <Heading>ambigram</Heading>
                    </Container.Column>
                    <ModeButton />
                </Container.FullWidthSpaceBetween>

                <Container fullWidth marginTop={getDimension().x16}>
                    <ScrollView
                        style={{ marginHorizontal: 24, overflow: 'visible' }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {fontData.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        marginRight: index === fontData.length - 1 ? 0 : 8,
                                    }}>
                                    <AmbigramFontContainer
                                        fontName={item.name}
                                        selected={item.selected}
                                        onPress={() => {
                                            dispatch(setFont(item.id));
                                        }}
                                    />
                                </View>
                            );
                        })}
                    </ScrollView>
                </Container>


                <Container fullWidth paddingHorizontal={24} marginTop={getDimension().x24}>
                    {/* Preview is here */}
                    <PreviewSection />
                </Container>


                {/* Color Selection */}
                <Container.Column gap={getDimension().x16} marginTop={getDimension().x16}>
                    <Container.FullWidthSpaceBetween paddingHorizontal={24}>
                        <Container.Row gap={6} centerItems>
                            <BGIcon />
                            <Label color={getColor(themeMode).primary}>background color</Label>
                        </Container.Row>
                        <Label
                            color={getColor(themeMode).primary}
                        >{selectedColor.name}</Label>
                    </Container.FullWidthSpaceBetween>
                    <ScrollView
                        style={{ marginHorizontal: 24, overflow: 'visible' }}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        {listOfColors.map((item, index) => (
                            <React.Fragment key={index}>
                                {index !== 0 && <View style={{ width: 12 }} />}
                                <ColorContainer
                                    selected={selectedColor.hex === item.hex}
                                    backgroundColor={item.hex}
                                    onPress={() => dispatch(setColor(item))} />
                            </React.Fragment>
                        ))}
                    </ScrollView>
                </Container.Column>

                {/* Text Input */}
                <Container.Column fullWidth gap={getDimension().x12} paddingHorizontal={24} marginTop={getDimension().x24}>
                    <InputText placeholder='ENTER FIRST WORD' />
                    <InputText placeholder='ENTER SECOND WORD (OPTIONAL)' />
                </Container.Column>

                {/* Error Messages */}
                <Container.FullWidthSpaceBetween paddingHorizontal={24} marginTop={8}>
                    <View></View>
                    {
                        isError && <Label color={getColor(themeMode).error}>{errorMessage}</Label>
                    }
                </Container.FullWidthSpaceBetween>

                {/* Save Button */}
                <Container.Column marginHorizontal={24} marginTop={getDimension().x12} gap={12}>
                    <Button title="GENERATE" onPress={handleGenerateAmbigram} />
                    <Button title="CLEAR PREVIEW" onPress={handleClearPreview} />
                </Container.Column>

                <ModalContainer />

            </SafeAreaView >

        </KeyboardAwareScrollView>

    );
};

export default MyForm;
