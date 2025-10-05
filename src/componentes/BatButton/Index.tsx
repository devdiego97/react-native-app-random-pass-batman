import { Button, Pressable, View,Text} from "react-native"
import {styles} from "./Style"
import BatTextInput from "../../componentes/BatTextInput/Index";
import { useState } from "react";
import generatePass from "./../../services/passwordService"
import * as Clipboard from 'expo-clipboard';



export const BatButton=()=>{
    const [pass,setPasss]=useState<string>("")


  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(pass);
  }

 
     const handleGenerateToken=()=>{
         let generateToken:string=generatePass()
         setPasss(generateToken)
     }
   


    return <View style={styles.container}>
        <BatTextInput pass={pass} />
        <Pressable style={styles.button}  accessibilityLabel="clique em mim" onPress={handleGenerateToken}>
          <Text style={styles.textButton} >GENERATE</Text> 
        </Pressable>

         <Pressable style={styles.button}  accessibilityLabel="clique em mim" onPress={copyToClipboard}>
          <Text style={styles.textButton}>COPY</Text> 
        </Pressable>
    </View>
}