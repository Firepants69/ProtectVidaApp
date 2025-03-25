import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import { useMemo } from 'react';


type propsGroupsCard = {
  
}
export default function GroupsCard(props:propsGroupsCard) {
  const { theme, isDark } = useTheme();

  const styles = useMemo(()=>
   StyleSheet.create({
      container: {
        width:"100%",
        borderWidth:2,
        borderColor:theme.textInputBorder,
        borderRadius:10
      },
      title:{
        color:theme.text,
        fontWeight:"bold"
      },subtiitle:{
        color:theme.subtitlecard
      }
    })
  ,[theme,isDark]);
  
  return (
      <View style={styles.container}>
        <View style={{padding:5}}>
            <Text style={styles.title}>
              Nombre de grupo
            </Text>
            <Text style={styles.subtiitle}>
              3 miembros
            </Text>

        </View>
        <View style={{
          borderBottomColor:theme.textInputBorder,
          borderBottomWidth:2
        }}>

        </View>
        <View style={{padding:5}}>
            <Text style={styles.subtiitle}>
              Este grupo no tiene miembros
            </Text>
        </View>
      </View>

  );
}

