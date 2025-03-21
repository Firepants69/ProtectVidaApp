import { useRouter } from "expo-router";
import { Text, View,StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "./contexts/ThemeProvider";
import { useEffect, useMemo } from "react";

type LandingCardsProps={
  title:string,
  subtitle:string
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
      Cuida la salud y seguridad de tu{"\n"} familia en un solo luga {"\n"}
      ¿Lo harás?
      </Text>
     <View
     style={{
      gap: 15, padding: 10 
      ,marginBottom:28
     }}
     >
     <LandingCards subtitle="Seguimiento de signos vitales en tiempo real." title="Monitoreo de salud"></LandingCards>
     <LandingCards subtitle="Localiza a tus seres queridos en cualquier momento." title="Ubicación en tiempo real"></LandingCards>
     <LandingCards subtitle="Notificaciones de emergencia y anomalías" title="Alertas inteligentes"></LandingCards>
     <LandingCards subtitle="Gestiona múltiples miembros de la familia" title="Grupos familiares"></LandingCards>
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
          color: theme.text,
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
          shadowColor: theme.cardindex, 
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        imageCard: {
          width: 50,
          height: 50,
          backgroundColor: "#D9D9D9", 
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

