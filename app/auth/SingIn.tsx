
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useMemo, useState } from "react";
import Back from './Back';
import { ButtonFullWidh } from '../index';
import { useTheme } from '../../contexts/ThemeProvider';
import InputRegisterLogin from '../../components/InputRegisterLogin';


export default function SingIn() {
    const [isChecked, setChecked] = useState<boolean>(false);
    const [isDisabled,setIsDisabled] = useState<boolean>(true);
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const { theme, isDark } = useTheme();


    
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

    const styles =  useMemo(()=>
        StyleSheet.create({
            container: {
                flex:1,  
                backgroundColor:theme.background,
            },containerInputs:{
                marginTop:40,
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
            },text:{
                fontFamily:'roboto-regular',
                fontWeight:"bold",
                fontSize:18,
                color:theme.text
              }
        })
        ,[theme, isDark]);

    return (
        <View style={styles.container}>
            <Back title='Crear cuenta'/>
            <View style={styles.containerInputs} >
                <View>
                <Text style={styles.text}>Nombre completo</Text>
                <InputRegisterLogin isSecurity={false} onchange={setName} placeHolder='Tu nombre'/>
                </View>
                <View>
                <Text style={styles.text}>Correo electrónico</Text>

                <InputRegisterLogin isSecurity={false} placeHolder='correo@gmail.com' onchange={setEmail}/>
                </View>
                <View>
                <Text style={styles.text}>Contraseña</Text>

                <InputRegisterLogin isSecurity onchange={setPassword} placeHolder='********'/>
                <Text style={{color:theme.subtitlecard,fontSize:14,textAlign:"center"}}>
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
                    style={{fontWeight:"semibold",fontSize:15,color:theme.subtitlecard}}
                    >
                    Acepto los términos de servicio y la política de privacidad
                    </Text>
                </View>
                <ButtonFullWidh disabled={isDisabled} size={100} title='Registrate'/>
            </View>
        </View>
    );
}


