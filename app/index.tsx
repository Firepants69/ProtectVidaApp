import { useRouter } from "expo-router";
import { Text, View,StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeProvider";
import {  useMemo } from "react";
import { FontAwesome } from "@expo/vector-icons";

type LandingCardsProps={
  title:string,
  subtitle:string,
  icon?: React.ReactNode;
};



export default function Index() {
  const router =useRouter();
  const { theme, isDark, toggleTheme } = useTheme();
  const indexStyles = useMemo(
    ()=>
    StyleSheet.create({
      title:{
        fontFamily:'roboto-regular',
        fontSize:36,
        color:theme.text,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:28,
        margin:14
      },
      subtitle:{
        fontFamily:'roboto-regular',
        textAlign:"center",
        width:269,
        fontSize:16,
        color:theme.subtitlecard,
        marginBottom:14
      },
    
    }),[theme,isDark]);

  const onClickGo=()=>{
    router.push('/auth/SingUp')
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:theme.background,
        alignItems: "center",  
      }}
    >
      <Text style={{...indexStyles.title}}>
        ProtectVida
      </Text>
      <Text style={{...indexStyles.subtitle}}>
      Cuida la salud y seguridad de tu{"\n"} familia en un solo lugar {"\n"}
      ¿Lo harás?
      </Text>
     <View
     style={{
      gap: 15, padding: 10 
      ,marginBottom:28
     }}
     >
     <LandingCards 
     icon={<FontAwesome size={30}  name="heartbeat" color={theme.cardindex} />}
     subtitle="Seguimiento de signos vitales en tiempo real." title="Monitoreo de salud"></LandingCards>
     <LandingCards 
     icon={<FontAwesome size={30}  name="location-arrow" color={theme.cardindex} />}
     subtitle="Localiza a tus seres queridos en cualquier momento." title="Ubicación en tiempo real"></LandingCards>
     <LandingCards 
     icon={<FontAwesome size={30}  name="bell" color={theme.cardindex} />}
     subtitle="Notificaciones de emergencia y anomalías" title="Alertas inteligentes"></LandingCards>
     <LandingCards 
     icon={<FontAwesome size={30}  name="group" color={theme.cardindex} />}
     subtitle="Gestiona múltiples miembros de la familia" title="Grupos familiares"></LandingCards>
     </View>
     <ButtonFullWidh disabled={false} title="Vamos" size={84} action={onClickGo}/>

    </View>
  );
}

function LandingCards(props:LandingCardsProps){
  const { theme,isDark } = useTheme(); 

  const stylesCard = useMemo(
    () =>
      StyleSheet.create({
        titlecard: {
          fontFamily: "roboto-regular",
          fontSize: 20,
          fontWeight: "bold",
          color: theme.text, 
        },
        subtitlecard: {
          fontFamily: "roboto-regular",
          color: theme.subtitlecard,
          fontSize: 16,
          textAlign: "left",
          width: 200,
        },
        backgroundCard: {
          backgroundColor: theme.cardindex, 
          padding: 16,
          flexDirection: "row",
          width: 316,
          alignItems: "center",
          borderRadius: 10,
          height: 103,
          shadowColor: theme.text, 
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        imageCard: {
          width: 50,
          height: 50,
          backgroundColor: "#D9D9D9", 
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginRight: 14,
          borderRadius: 25,
        },
      }),
    [theme,isDark] 
  );

  return(
    <View
    style={stylesCard.backgroundCard}
    >
      <View 
      style={stylesCard.imageCard}
      >
         {props.icon && props.icon}
      </View>
      <View >
        <Text style={stylesCard.titlecard}>
          {props.title}
        </Text>    
        <Text
        style={stylesCard.subtitlecard}>
          {props.subtitle}
        </Text>    
      </View>
    </View>
  );
  
}

export function ButtonFullWidh(props:{title:string; action?: () => void;size:Number;disabled:boolean}){
  const stylesButton = StyleSheet.create({
    
    button :{
      backgroundColor:props.disabled?"#64748B":"#3A72ED",
      fontWeight:"bold",
      textAlign:"center",
    
      height:48,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 10
    },
    buttonText :{
      fontFamily:'roboto-regular',
      fontSize:18,
      color:"white"
      ,fontWeight:"bold"
      ,textAlign:"center"
    }
  })
  
  return(
    <TouchableOpacity  disabled={props.disabled} onPress={props.action ?? (()=>{})}  style={[stylesButton.button, { width: `${Number(props.size)}%` }]}  >
      <Text style={stylesButton.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
} 

