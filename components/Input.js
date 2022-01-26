import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return <TextInput 
                {...props} style ={{...styles.textInput, ...props.style}}
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}  />
};

const styles = StyleSheet.create({
    textInput: { 
        flex: 1,
        height: 35,
        paddingHorizontal: 15,
        fontSize: 18,
        color: '#388087'
    }
});

export default Input;
