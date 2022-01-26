import React, { useState } from "react";
import { Text, ImageBackground, View, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity,Alert, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Input from "./Input";

const Login = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

const handleRegister = () => {
    Alert.alert('go to page register')
}    

const handleSubmitButton = () => {
    if (userEmail === '') {
        Alert.alert('' , 'Please Fill Email' , [{text: 'OK', style: 'cancel'}]) 
        return;
    }
    if (userPassword === '') {
        Alert.alert('' , 'Please Fill Password' , [{text: 'OK', style: 'cancel'}]) 
        return;
    }
    setUserEmail('');
    setUserPassword('');
};
    return(
        <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/po.jpeg')}>
        <TouchableWithoutFeedback 
            onPress={() => Keyboard.dismiss()}>
            <View style = {styles.screen}>
                <View style = {styles.logoContainer}>
                    {/* <Ionicons style= {styles.logo} name="chatbubbles" /> */}
                </View>
                <View style = {styles.textContainer}>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail" style = {styles.icon}/>
                    <Input
                        onChangeText={(userEmail) => setUserEmail(userEmail)}
                        value = {userEmail}
                        placeholder="Enter Email"/>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" style = {styles.icon}/>
                    <Input
                        onChangeText={(userPassword) => setUserPassword(userPassword)}
                        value = {userPassword}
                        secureTextEntry={true}
                        placeholder="Enter Password"/>
                </View>
                <View style={styles.buttonContainer}>  
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.5}
                        onPress={handleSubmitButton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.registButton}>
                     <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        height: 50,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        borderBottomWidth: 3,
        borderRadius: 50,
        borderColor: '#6FB3B8',
    },
    buttonContainer: {
        maxWidth: '100%',
        width: 400,
        paddingHorizontal: 15,
        marginVertical: 20,
    },
    button: {
        width: 300,
        maxWidth: '80%',
        backgroundColor: '#6FB3BB',
        borderWidth: 0,
        color: '#388087',
        borderColor: '#388087',
        height: 40,
        alignItems: 'center',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        borderRadius: 10,
      },
      buttonText: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,
      },    
      icon: {
          fontSize: 30,
          color: '#388087'
      },
      imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
        },
      textContainer: {
          padding: 10,
      },
      titleText: {
          fontSize: 30,
          color: '#388087',
          marginRight: 240,
      },
      text:{
          color: 'black',
          fontSize: 18,
          color: '#388087',
          alignItems: 'flex-end'
      },
      logoContainer: {
          paddingBottom: 100
      },
      logo: {
          color: '#388087',
          fontSize: 100,
      },
});

export default Login;