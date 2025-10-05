import { TextInput } from "react-native"
import {styles} from "./Style"

type props={
    pass:string
}

export default ({pass}:props)=>{
    return <TextInput placeholder="password" value={pass} style={styles.input} />
}