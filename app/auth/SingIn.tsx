import { View, Text, StyleSheet,TextInput } from 'react-native';
import React from "react";
import Back from './Back';
import {styles as inputStyle} from "../styles/TextInput"

export default function SingIn() {
    return (
        <View style={styles.container}>
            <Back title='Crear cuenta'/>
            <View style={styles.containerInputs} >
                <View>
                <Text style={inputStyle.text}>Nombre completo</Text>
                <TextInput placeholderTextColor={"#64748B"} placeholder='Tu nombre' style={inputStyle.textInput}/>
                </View>
                <View>
                <Text style={inputStyle.text}>Correo electrónico</Text>
                <TextInput placeholderTextColor={"#64748B"} placeholder='correo@gmail.com' style={inputStyle.textInput}/>
                </View>
                <View>
                <Text style={inputStyle.text}>Contraseña</Text>
                <TextInput placeholderTextColor={"#64748B"} placeholder='********' secureTextEntry={true} style={inputStyle.textInput}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,  
        backgroundColor:"#F1F7FF",
    },containerInputs:{
        display:"flex",
        padding:20,
        gap:20
    }
});
