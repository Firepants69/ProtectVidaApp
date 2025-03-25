import {Pressable,Text,StyleSheet,Image} from "react-native"
import * as Google from "expo-auth-session/providers/google"
import { useEffect, useMemo } from "react"
import { useTheme } from "../contexts/ThemeProvider";
import { useRouter } from "expo-router";

export default function BtnLoginGoogle(){
    const { theme, isDark } = useTheme();
    const router = useRouter();
    const [request,response,promptAsync] = Google.useAuthRequest({
        androidClientId:'623456163779-0j8th8e6quaiale3ca52pf5one8qsifi.apps.googleusercontent.com'
    })

    const SendToken = async (token:string)=>{
        console.log(token)
        router.push('/(tabs)/location')
    }

    useEffect(()=>{
        if(response){
            if(response.type === "success"){
                SendToken(response.authentication?.accessToken || '')
            }else{
                // Error xddxdxdxd
            }
        }
    },[])
    
    const styles = useMemo(()=>
 
        StyleSheet.create({
            btn:{
                backgroundColor:theme.cardindex,
                fontWeight:"bold",
                textAlign:"center",
                height:48,
                display:"flex",
                borderWidth:2,
                justifyContent:"center",
                alignItems:"center",
                borderRadius: 10,
                flexDirection:"row",
                borderColor:theme.textInputBorder,
                gap:10
            },text:{
                fontFamily:'roboto-regular',
                fontSize:18,
                color:theme.text,
                fontWeight:"bold",
                textAlign:"center"
            }
        })
    ,[theme,isDark])

    return (
        <Pressable 
        onPress={()=> promptAsync().catch((e)=>{
            console.error(e);
        })}
        style={styles.btn}>
            <Image source={require('../assets/images/google.webp')} style={{width:25,height:25}}/>
            <Text style={styles.text}>
                Google
            </Text>
        </Pressable>
    )
}

