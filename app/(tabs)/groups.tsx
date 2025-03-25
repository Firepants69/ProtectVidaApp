import { View, Text, StyleSheet } from 'react-native';
import TitleTab from "../../components/TitleTab"
import { useTheme } from '../../contexts/ThemeProvider';
import { useMemo } from 'react';
import { ButtonFullWidh } from '../index';
import GroupsCard from '../../components/GroupsCard';
export default function Groups() {
  const { theme, isDark } = useTheme();

  const styles = useMemo(()=>
   StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:theme.background,
      },
    })
  ,[theme,isDark]);
  
  return (
    <View style={styles.container}>
      <TitleTab title='Grupos'/>
      <View style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        padding:20,
      }}>
      <ButtonFullWidh size={100} title='Crear nuevo grupo' disabled={false} />
      <View style={{marginTop:20, gap:15}}>
      <GroupsCard/>
      <GroupsCard/>
      </View>
      </View>
    </View>
  );
}

