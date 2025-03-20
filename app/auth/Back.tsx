import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

export default function SingUp(props:{title:string}) {
    const router = useRouter();
    const handleBack=()=>{
        router.back()
    }

    return (
        <View style={styles.container}>
            <View style={
                styles.containertitle
            }>
            <TouchableOpacity
            onPress={handleBack}
            >
            <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>
                {props.title}
                </Text>
            </View>
            <View style={styles.underline} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 20,
        
    },
    title: {
        fontSize: 20,
        fontFamily:"roboto-regular",
        fontWeight: 'bold',
    },
    underline: {
        height: 2, 
        backgroundColor: '#ECF0F5',
        shadowColor: "#000",
        margin:0,
        padding:0,
        width: "100%", 
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
});