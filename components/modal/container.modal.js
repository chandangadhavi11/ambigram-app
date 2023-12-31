import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Container } from '../../ui/container.ui';
import { CreditEmptyIcon, PowerIcon, PowerIconXs } from '../icons';
import { Label } from '../../ui/label.ui';
import Button from '../../ui/button.ui';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCredit, resetCreditModalState } from '../../redux/reducers/main.reducer';

const ModalContainer = ({
    children,
}) => {
    const { isIncreaseCreditModalVisible: visible } = useSelector(state => state.main);
    const dispatch = useDispatch();
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CreditEmptyIcon />
                        <Container.Column gap={12} marginTop={24} marginBottom={36} centerItems>
                            <Label color="#65616D" fontSize={14}>Credit Limit Reached</Label>
                            <Container.Column centerItems gap={4}>
                                <Label color="#959399">Watch a short ad to get 5 more</Label>
                                <Label color="#959399">credits instantly</Label>
                            </Container.Column>
                        </Container.Column>


                        {/* Watch Ad Button */}
                        <Button
                            onPress={() => {
                                dispatch(increaseCredit());
                            }}
                        >
                            <Container.Row centerItems gap={6}>
                                <Label color="white">Watch Ad</Label>
                                <Container.Row gap={1}>
                                    <Label color="white">(+5</Label>
                                    <PowerIconXs />
                                    <Label color="white">)</Label>
                                </Container.Row>
                            </Container.Row>
                        </Button>

                        {/* Cancel Button */}
                        <Container marginTop={12}></Container>
                        <Button title={"Cancel"}
                            onPress={() => {
                                dispatch(resetCreditModalState());
                            }}
                        />

                        <Container marginTop={24}>
                            <Label color="#959399" fontSize={6}>Your support by watching ads helps us create more apps like this</Label>

                        </Container>
                    </View>
                </View>
            </Modal >
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalView: {
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        paddingHorizontal: 36,
        paddingTop: 36,
        paddingBottom: 42,
        alignItems: 'center',
        shadowRadius: 4,
    },
    button: {
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalContainer;