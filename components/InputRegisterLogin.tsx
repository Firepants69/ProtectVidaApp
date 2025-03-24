import {  StyleSheet, TextInput } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import { useMemo } from 'react';

type inputProps={
    placeHolder:string,
    onchange:Function,
    isSecurity:boolean
  };
  
export default function InputRegisterLogin(props:inputProps) {
    const { theme, isDark } = useTheme();

    const styles = useMemo(()=>
        StyleSheet.create({
            textInput:{
                fontFamily:'roboto-regular',
                fontSize:18,
                color:theme.text,
                paddingTop:10,
                paddingBottom:10,
                paddingLeft:30,
                borderRadius:10,
                borderWidth:2,
                width:"100%",
                borderColor:theme.textInputBorder
          
              }
        }),[isDark,theme])

    return (
        <TextInput 
                onChangeText={val=> props.onchange(val)}
                placeholderTextColor={theme.subtitlecard} placeholder={props.placeHolder} secureTextEntry={props.isSecurity} style={styles.textInput}/>
    );
}

