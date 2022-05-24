import {View, Text, Pressable, StyleSheet} from "react-native"
import { LightenDarkenColor } from 'lighten-darken-color'; 
const PrimaryButton = (props) => {
    const bgcolor = props.bgcolor

    return(
    <View style={{
        backgroundColor: props.bgcolor,
        borderRadius:5,
        margin: 3,
        marginHorizontal: 5
    }}>
        <Pressable 
            onPress={props.onPress}
            style={({pressed})=> pressed && {borderRadius:5 ,backgroundColor: LightenDarkenColor(bgcolor, 40)}}>
            
                <Text style={{
                    color: props.color,
                    textAlign:"center",
                    fontSize:16,
                    padding: 5,
                    paddingHorizontal: 8
                }}>
                    {props.children}
                </Text>
        </Pressable>
    </View>
    )
}
export default PrimaryButton

const styles = StyleSheet.create({

})