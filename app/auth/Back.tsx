import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useMemo } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { useTheme } from '../../contexts/ThemeProvider';

export default function TitleTab(props:{title:string}) {
    const router = useRouter();
    const { theme, isDark } = useTheme();
    
    const handleBack=()=>{
        router.back()
    }

    const styles = useMemo(()=>
        StyleSheet.create({
            container: {
                alignItems: 'flex-start',
                paddingHorizontal: 20,
                marginTop: 20,
                
            },
            title: {
                fontSize: 20,
                fontFamily:"roboto-regular",
                color:theme.text,
                fontWeight: 'bold',
            },
            underline: {
                height: 2, 
                backgroundColor: theme.textInputBorder,
                shadowColor: theme.textInputBorder,
                margin:0,
                padding:0,
                width: "120%", 
            },
            containertitle:{
                marginLeft:5,
                display:'flex',
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                gap:16,
                marginBottom:20
            }
        })
    ,[ theme, isDark])

    return (
        <View style={styles.container}>
            <View style={
                styles.containertitle
            }>
            <TouchableOpacity
            onPress={handleBack}
            >
            <AntDesign name="arrowleft" size={20} color={theme.text} />
            </TouchableOpacity>
            <Text style={styles.title}>
                {props.title}
                </Text>
            </View>
            <View style={styles.underline} />
        </View>
    );
}

