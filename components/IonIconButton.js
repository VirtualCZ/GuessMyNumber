import IonIcon from 'react-native-vector-icons/Ionicons';
import { LightenDarkenColor } from 'lighten-darken-color'; 
import {View, Pressable} from "react-native"
const IonIconButton = (props) => {
    const bgcolor = props.bgcolor
    return(
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.bgcolor,
            borderRadius:15,
            margin: 3,
            marginHorizontal: 10,
        }}>
            <Pressable 
                onPress={props.onPress}
                style={({pressed})=> pressed && {backgroundColor: LightenDarkenColor(bgcolor, 40)}}>
                
                    <IonIcon
                        name={props.children}     
                        size={parseInt(props.size)}
                        color={props.color}    
                        style={{
                            padding: 5,

                        }}
                    />
            </Pressable>
        </View>
    )
}
export default IonIconButton




