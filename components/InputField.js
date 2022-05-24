import {View, TextInput, Text} from "react-native"

const InputField = (props, {style}) => {
    return(
    <View>
        <TextInput
            onChangeText={props.setValue}
            placeholder={props.placeholder}
            value={props.value}
            keyboardType={props.type}
            maxLength={props.max}
            style={[
            {
                textAlign:"center",
                backgroundColor: "white",
                color: "#1f2020",
                borderRadius: 5,
                padding: 10,
                width: "100%",
            },
                style
            ]}
        />
    </View>
    )
}
export default InputField
