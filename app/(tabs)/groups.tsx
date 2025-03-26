import { View, Text, StyleSheet,ScrollView } from 'react-native';
import TitleTab from "../../components/TitleTab"
import { useTheme } from '../../contexts/ThemeProvider';
import { useMemo } from 'react';
import { ButtonFullWidh } from '../index';
import GroupsCard from '../../components/GroupsCard';
import { GroupMember } from '../types';

const member:Array<GroupMember>= [
  {
    accountId:1,
    groupId:1,
    isAdmin:true,
    Name:"rafael"
  },
  {
    accountId:1,
    groupId:1,
    isAdmin:true,
    Name:"rafael merlin"
  },
  {
    accountId:1,
    groupId:1,
    isAdmin:false,
    Name:"Adrian "
  }
]

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
      <ScrollView style={{marginTop:20}} contentContainerStyle={{ gap: 15 }}>
 
      <GroupsCard members={member}/>
      </ScrollView>
      </View>
    </View>
  );
}

