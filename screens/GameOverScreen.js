import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions } from "react-native"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

const GameOverScreen = (props) => {
    const {width, height} = useWindowDimensions()

    let content =(
        <View style={styles.container}>
        <View style={styles.card}>
        <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/success.png")}/>
        </View>
        <Text style={styles.title}>The end!</Text>
        <Text style={styles.text}>Your number was <Text style={styles.text1}>{props.number}</Text>.</Text>
        <Text style={styles.text}>Guessing took <Text style={styles.text1}>{props.attempts}</Text> tries.</Text>
        <PrimaryButton 
            color="white"
            bgcolor={Colors.secondary}
            onPress={() => {
                props.restart()
              }}
        >
            New Game
        </PrimaryButton>
        </View>
    </View>
    )

    if (width > 500){
        content = (
        <View style={styles.container}>
            <View style={[styles.card, {flexDirection: "row"}]}>
                <View style={[styles.imageContainer, {height: "100%", width:"50%"}]}>
                        <Image style={styles.image} source={require("../assets/success.png")}/>
                </View>
                <View style={{flex:1, justifyContent:"center"}}>
                    <Text style={styles.title}>The end!</Text>
                    <Text style={styles.text}>Your number was <Text style={styles.text1}>{props.number}</Text>.</Text>
                    <Text style={styles.text}>Guessing took <Text style={styles.text1}>{props.attempts}</Text> tries.</Text>
                    <PrimaryButton 
                        color="white"
                        bgcolor={Colors.secondary}
                        onPress={() => {
                            props.restart()
                        }}
                    >
                        New Game
                    </PrimaryButton>
                </View>
            </View>
        </View>
        )
    }

    return(
        <>
            {content}
        </>
    )
}

const deviceWidth = Dimensions.width

export default GameOverScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: 30,
    },
    card: {
        borderRadius: 15,
        backgroundColor: Colors.primary,
        marginTop: 15,
        padding:12
    },
    title: {
        fontFamily:"open-sans-bold",
        fontSize: deviceWidth<400 ? 38 : 50,
        color: "black"
    },
    text: {
        fontFamily:"open-sans",
        fontSize: deviceWidth<400 ? 20 : 30,
        color: "black"
    },
    text1: {
        fontFamily:"open-sans-bold",
        fontSize: deviceWidth<400 ? 20 : 30,
        color: Colors.secondary
    },
    imageContainer: {
        width: "96%",
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
        margin: 5,
        alignSelf: "center"
    },
    image: {
        width: "100%",
        height:"100%"
    },
})