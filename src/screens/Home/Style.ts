import { StyleSheet } from "react-native";


export const styles={
    appContainer:{
         
        flex:1,
        backgroundColor:"rgba(0,0,0,0.7)",
        alignItems:"center" as const,
         justifyContent: "center" as const,
       
    },
      overlay: {
          alignItems:"center" as const,
         justifyContent: "center" as const,
    ...StyleSheet.absoluteFillObject, // preenche toda a área do pai
    backgroundColor: 'rgba(0,0,0,0.5)', // preto com 50% de transparência
  },
    logoContainer:{
        borderColor:"white",
        borderWith:2,
        
        alignSelf:"center" as const,
        marginBottom:60,
        paddingTop:20,
        justifyContent:"center" as const,
        flexDirection:"column" as const
    },
    containerInput:{
        width:'80%' as const,
       flexDirection:"column" as const,
     alignItems:'center'as const,



    },
    text:{
        color:'#a53333',
    
    }
}