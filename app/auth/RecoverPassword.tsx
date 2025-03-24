import { useTheme } from '../../contexts/ThemeProvider';
import InputRegisterLogin from '../../components/InputRegisterLogin';
import { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Back from './Back';

import { ButtonFullWidh } from '../index';

export default function RecoverPassword() {
    
    const [email,setEmail] = useState<string>("");
    const { theme, isDark } = useTheme();
    const [isCheck,setIsCheck] = useState<boolean>(true);

    const checkForm = ()=>{
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(email)){
            setIsCheck(false);
        }else{
          setIsCheck(true);
        }
      }
    
    useEffect(()=>{
        checkForm();
    },[email])

    const recoverPassword=()=>{
        console.log("me gusta el pene")
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:theme.background,
        },
        inputs:{
            marginTop:60,
            paddingHorizontal: 20,
            gap:15
        },
        text:{
          fontFamily:'roboto-regular',
          fontWeight:"bold",
          fontSize:18,
          color:theme.text
        }
      });
      
  return (
    <View style={styles.container}>
        <Back title='Recuperar contraseña'/>
        <View style={styles.inputs}>
            <Text style={styles.text}>Ingresa tu correo electrónico</Text>
            <View style={{paddingBottom:20}}>
                <InputRegisterLogin isSecurity={false} onchange={setEmail} placeHolder='correo@gmail.com'/>
            </View>
            <ButtonFullWidh action={recoverPassword} disabled={isCheck} size={100} title='Recuperar contraseña' />
        </View>
    </View>
  );
}

