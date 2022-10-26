import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from "../styles/styles"

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.header__image} source={require("../../../asset/camera.png")} />
            <Text style={styles.header__title}>Feed</Text>
            <Image style={styles.header__image} source={require("../../../asset/pen.png")} />
        </View>
    )
}