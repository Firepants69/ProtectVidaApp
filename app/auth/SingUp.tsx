import {View,Text,StyleSheet} from 'react-native';
import React from "react";

export default function SingUp(){
    return(
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Iniciar sesión</Text>
      </View>
        
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderBottomColor: 'red',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });