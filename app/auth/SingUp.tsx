import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from "react";
import Back from './Back';
import { ButtonFullWidh } from '../index';
import { useRouter } from 'expo-router';
import { useTheme } from '../../contexts/ThemeProvider';
import InputRegisterLogin from '../../components/InputRegisterLogin';
import BtnLoginGoogle from '../../components/BtnLoginGoogle';

export default function SingUp() {
    const [email,setEmail] = useState<string>("");
    const [passWord,setPassword] = useState<string>("");
    const [isDisabled,setIsDisabled] = useState<boolean>(true);
    const { theme, isDark } = useTheme();
    
    const styles = useMemo(()=>
      StyleSheet.create({
        passwordView:{
          flexDirection: "row",
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          padding: 10,
          alignItems: "center", 
        },
        forgotPasswordText:{
          color:"#356EEC",
          fontSize:14,
          fontWeight:"bold",
        },
        container: {
            flex:1,  
            backgroundColor:theme.background,
        },
        containerInputs:{
          marginTop:60,
          paddingHorizontal: 20,
          gap:15
        },
        containerInput:{
          gap:4
        },
        text:{
          fontFamily:'roboto-regular',
          color:theme.text,
          fontWeight:"bold",
          fontSize:18
        },
     
    }),[theme,isDark])
  
    
    const router = useRouter();

    const handleClickRegister=()=>{
        router.push('/auth/SingIn')
    }

    const handleClickRecoverPassword=()=>{
      router.push('/auth/RecoverPassword')
    }

    const checkForm = ()=>{
      const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(emailRegex.test(email) && (passWord.length>=8 && passWord.length <= 20)){
          setIsDisabled(false);
      }else{
        setIsDisabled(true);
      }
    }

    useEffect(()=>{
      checkForm()
    },[email,passWord])

    return (
        <View style={styles.container}>
            <Back title='Iniciar sesión'/>

            <View style={styles.containerInputs}>

            <View style={styles.containerInput}>
              <Text style={styles.text}>
                Correo electrónico
              </Text>
              
              <InputRegisterLogin isSecurity={false} onchange={setEmail} placeHolder='correo@gmail.com' />
            </View>
            
            <View style={{paddingBottom:20}}>
                <View style={styles.passwordView}>
                  <Text style={styles.text}>
                    Contraseña
                  </Text>
                  <TouchableOpacity
                  onPress={handleClickRecoverPassword}
                  >
                    <Text style={styles.forgotPasswordText}>
                    ¿Olvidaste tu contraseña?  
                    </Text>  
                  </TouchableOpacity>   
                </View>
                
                <InputRegisterLogin isSecurity onchange={setPassword} placeHolder='********'/>
            </View>
            <ButtonFullWidh action={()=>{  router.push('/(tabs)/location')}} disabled={isDisabled} title='Iniciar sesión' size={100}/>
            <BtnLoginGoogle/>
            <View
            style={{
              paddingTop:10,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"row",
              gap:4   
            }}
            >
            <Text style={{
              textAlign:"center",
              fontFamily:'roboto-regular',
              color:theme.text,
              fontSize:14,
              }}>
              ¿No tienes una cuenta? 
            </Text>
            <TouchableOpacity
            onPress={handleClickRegister}
            >
                <Text 
                style={{
                textAlign:"center",
                fontFamily:'roboto-regular',
                fontSize:14,
                color:"#356EEC"        
                }}>Regístrate 
                </Text>
              </TouchableOpacity>
            
            </View>
            </View>
        </View>
    );
}

