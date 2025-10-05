import { StatusBar } from "expo-status-bar";
import react from "react"
import { View,Text,ImageBackground } from "react-native"
import { styles } from "./Style";
import BatLogo from "../../componentes/BatLogo/Index";
import{ BatButton } from "../../componentes/BatButton/Index"


export default ()=>{


    return (
       <ImageBackground 
         style={styles.appContainer}
            source={require('../../../assets/bat.png')} 
            resizeMode="cover" 
       >
         <View style={styles.overlay}>
              <View style={styles.logoContainer}>
                 <BatLogo />
              </View>
              <View style={styles.containerInput}>
                <BatButton />
              </View>
           
           <StatusBar style="light" />
         </View>
      </ImageBackground>
             
   
)
}

