import { Text, View, StyleSheet, FlatList, Alert } from "react-native"
import { useState, useEffect } from "react"

import Colors from "../constants/colors"
import IonIconButton from "../components/IonIconButton"

let min = 1
let max = 100

const GameScreen = (props) => {
    const genRanNum = (min, max) => {
        const rndNum = Math.floor(Math.random() * (max-min) + min)
        return rndNum
    }
    const [guess, setGuess] = useState(genRanNum(1, 100))
    const [guessArr, setguessArr] = useState([])
    
    const genNextNum = (plusminus) => {
        if(plusminus === "lower" && guess > props.number){
            max = guess
            setGuess(genRanNum(min,max))
        }
        else if(plusminus === "higher" && guess < props.number){
            min = guess
            setGuess(genRanNum(min,max))
        }
        else{
            Alert.alert(
                'I see what ya did there :)',
                "Dont't try to fool the computer, bro!",
                [
                  {
                    text: "IQ++",
                  },
                ],
                { cancelable: false }
              );
        }
    }

    useEffect(() => {
        props.onAttempts()
        setguessArr(currentArr => [
            ...currentArr, 
            {guess: guess, key: props.attempts}
          ])
        if (guess == props.number){
            min = 1
            max = 100
            props.onGameOver(true)
        }
    }, [guess])
    

    return(
        <View style={styles.container}>
            <View style={styles.guessNumberContainer}>
                <Text style={styles.title}>Opponents guess</Text>
                <Text style={styles.number}>{guess}</Text>
                <View style={{flexDirection: "row", height: 80}}>
                    <View style={{flex:1}}>
                        <IonIconButton onPress={()=>genNextNum("higher")} size="30" bgcolor={Colors.secondary} color="white">add</IonIconButton>
                    </View>

                    <View style={{flex:1}}>
                        <IonIconButton onPress={()=>genNextNum("lower")} size="30" bgcolor={Colors.secondary} color="white">remove</IonIconButton>
                    </View>
                </View>

            </View>

            <View style={styles.guessLogContainer}>
                <FlatList
                    data={guessArr}
                    renderItem={itemData => {
                        return(
                            <View style={styles.logitem}>
                            <Text style={{color: "white", fontWeight: "bold"}}>Computer guess:{itemData.item.guess}</Text>
                            <Text style={{color: "white", fontWeight: "bold"}}>Attempt no. {itemData.item.key}</Text>
                            </View>
                        )
                    }}
                    style={styles.guess}
                    inverted={true}
                />
            </View>

        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingVertical: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    guessNumberContainer:{
        borderRadius: 15,
        backgroundColor: Colors.primary,
        padding: 12,
        width:"100%",
        justifyContent: "center"
    },
    title:{
        fontSize:24,
        fontWeight: "bold",
        alignSelf: "center"
    },
    number:{
        fontSize:90,
        fontWeight: "bold",
        alignSelf: "center",
        color: Colors.secondary
    },
    guessLogContainer: {
        borderRadius: 15,
        backgroundColor: Colors.primary,
        flex:1,
        width: "100%",
        marginTop: 15,
        padding:12
    },
    guessLog:{
        flex: 1,
        width: "100%",
        alignContent: "center",
    },
    logitem: {
        flex:1,
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: Colors.secondary,
        color: "white",
        marginBottom: 10,
        padding: 4,
        paddingVertical: 6,
        borderRadius: 10
    }
})