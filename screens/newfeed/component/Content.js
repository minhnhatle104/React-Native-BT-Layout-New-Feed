import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../styles/styles'


export default function Content(props) {
    const {data} = props
    const [numLike,setLike] = useState(0)
    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.textContent}>{data.content}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                    setLike(numLike + 1)
                }}>
                    <Image source={require("../../../asset/heart.png")} style={styles.other_avatar} />
                </TouchableOpacity>
                <Text style={styles.textContent}>{numLike}</Text>
                <Image source={require("../../../asset/comment.png")} style={styles.other_avatar} />
                <Text style={styles.textContent}>2</Text>
            </View>
        </View>
    )
}