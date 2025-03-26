import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import { useMemo } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type propsGroupItem = {
  Name:string,
  isAdmin:boolean,
  accountId:Number,
  groupId:Number,
}

export default function GroupItem(props:propsGroupItem) {
  const { theme, isDark } = useTheme();

  const styles = useMemo(()=>
   StyleSheet.create({
      container: {
        width:"100%",
      },
      containerItems:{
        flexDirection: "row",
        flexWrap: "wrap", 
        justifyContent: "space-between", 
      },
      title:{
        color:theme.text,
        fontSize:18,
        fontFamily:'roboto-regular',
        fontWeight:"medium"
      },subtiitle:{
        color:theme.subtitlecard,
        fontFamily:'roboto-regular',
        fontSize:16,
        fontWeight:"regular"
      },icon:{
        width: 50,
        height: 50,
        borderColor: theme.textInputBorder,
        borderWidth:2, 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginRight: 14,
        borderRadius: 100,
        padding:0,
      },buttonsContainer:{
        marginRight:10,
        display:"flex",
        flexDirection:"row",
        gap:15,
        justifyContent:"center",
        alignItems:"center"
      }
    })
  ,[theme,isDark]);
  
  return (
      <View style={styles.container}>
          <View style={styles.containerItems}>
          <View style={{display:"flex", flexDirection:"row"}}>
          <View style={styles.icon}>
              {props.isAdmin?
              <MaterialIcons name="admin-panel-settings" size={40} color={theme.text} />:
              <MaterialCommunityIcons name="account" size={40} color={theme.text} />}
          </View>
            <View style={{display:"flex", flexDirection:"column"}}>
              <Text style={styles.title}>
                {props.Name.length < 19? props.Name: props.Name.slice(0,18)+"..."}
              </Text>
              <Text style={styles.subtiitle}> 
                {props.isAdmin?"Administrador":"Normal"}
              </Text>  
            </View>     
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
                <FontAwesome size={28} name='trash'color={"#ef4444"}/>    
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome size={28} name='cog' color={theme.subtitlecard}/>  
            </TouchableOpacity>
          </View>  
          </View>     
      </View>

  );
}

