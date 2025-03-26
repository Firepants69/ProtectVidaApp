import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import { useMemo } from 'react';
import GroupItem from './GroupItem';
import { GroupMember } from '@/app/types';


type propsGroupsCard = {
  members:Array<GroupMember>
}
export default function GroupsCard({members}:propsGroupsCard) {
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
        fontSize:18,
        fontWeight:"bold",
        fontFamily:'roboto-regular',
      },subtiitle:{
        color:theme.subtitlecard,
        fontFamily:'roboto-regular',
        fontSize:16,
      },
      button:{
        width:"95%",
        height:44,
        borderWidth:2,
        borderColor:theme.textInputBorder,
        borderRadius:10,
        justifyContent:"center",
        display:"flex",
        alignItems:"center"
      },
      buttonText:{
        fontFamily:'roboto-regular',
        textAlign:"center",
        color:theme.text,
        fontWeight:"bold",
        fontSize:18
      }
    })
  ,[theme,isDark]);
  
  return (
      <View style={styles.container}>
        <View style={{padding:10,paddingLeft:15}}>
            <Text style={styles.title}>
              Nombre de grupo
            </Text>
            <Text style={styles.subtiitle}>
              {members.length} miembros
            </Text>

        </View>
        <View style={{
          borderBottomColor:theme.textInputBorder,
          borderBottomWidth:2
        }}>

        </View>
        <View style={{padding:10, gap:10}}>
              {members.map((member)=>
              <GroupItem Name={member.Name} isAdmin={member.isAdmin} accountId={member.accountId} groupId={member.groupId}/>
              )}
              <View style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%"}}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  Invitar miembro
                </Text>
              </TouchableOpacity>
              </View>
        </View>
      </View>

  );
}

