import { View, Text, StyleSheet } from 'react-native';
import TitleTab from "../../components/TitleTab"
import { useTheme } from '../../contexts/ThemeProvider';
import { useMemo } from 'react';

export default function Settings() {
  const { theme, isDark } = useTheme();

  const styles = useMemo(()=>
   StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:theme.background
      },
    })
  ,[theme,isDark]);
  
  return (
    <View style={styles.container}>
      <TitleTab title='Configuración'/>
    </View>
  );
}

