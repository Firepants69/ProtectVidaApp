
import { View, Text, StyleSheet,TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from "react";
import Back from './Back';
import {styles as inputStyle} from "../styles/TextInput"
import { ButtonFullWidh } from '../index';

export default function SingIn() {
    const [isChecked, setChecked] = useState<boolean>(false);
    const [isDisabled,setIsDisabled] = useState<boolean>(true);
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const checkForm=()=>{
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(emailRegex.test(email) && (password.length>=8 && password.length <= 20) && name.length >= 10 && isChecked){
          setIsDisabled(false);
      }else{
        setIsDisabled(true);
      }
    }

    useEffect(()=>{
        checkForm()
    },[email,password,name,isChecked])

    return (
        <View style={styles.container}>
            <Back title='Crear cuenta'/>
            <View style={styles.containerInputs} >
                <View>
                <Text style={inputStyle.text}>Nombre completo</Text>
                <TextInput onChangeText={val=> setName(val)} placeholderTextColor={"#64748B"} placeholder='Tu nombre' style={inputStyle.textInput}/>
                </View>
                <View>
                <Text style={inputStyle.text}>Correo electrónico</Text>
                <TextInput 
                onChangeText={val=> setEmail(val)}
                placeholderTextColor={"#64748B"} placeholder='correo@gmail.com' style={inputStyle.textInput}/>
                </View>
                <View>
                <Text style={inputStyle.text}>Contraseña</Text>
                <TextInput 
                onChangeText={val=> setPassword(val)}
                placeholderTextColor={"#64748B"} placeholder='********' secureTextEntry={true} style={inputStyle.textInput}/>
                <Text style={{color:"#64748B",fontSize:14,textAlign:"center"}}>
                              La contraseña debe tener al menos 8 carácteres
                              </Text>
                </View>
                <View style={styles.buttonPolicy}>
                    <Checkbox 
                        style={styles.checkbox}
                        onValueChange={setChecked} 
                        value={isChecked}
                        
                        />
                    <Text
                    style={{fontWeight:"semibold",fontSize:15}}
                    >
                    Acepto los términos de servicio y la política de privacidad
                    </Text>
                </View>
                <ButtonFullWidh disabled={isDisabled} size={100} title='Registrate'/>
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
    },
    buttonPolicy:{
        display:"flex",
        flexDirection:"row",
        gap:10,
        marginTop:15,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"flex-start"
    },checkbox:{
        margin:0,
        borderWidth:1,
        borderColor:"#3A72ED"
    }
});
