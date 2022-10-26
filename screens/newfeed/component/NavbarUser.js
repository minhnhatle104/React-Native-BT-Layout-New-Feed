import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

export default function NavbarUser(props) {
    const { dataAvatar } = props

    const _renderAvatar = (data) => {
        console.log(data)
        return <View style={{alignItems:"center",margin:15}}>
            <Image style={styles.avatar} source={data.item.image} />
            <Text>{data.item.name}</Text>
        </View>
    }

    return (
        <View style={styles.navbar}>
            <FlatList horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={dataAvatar}
                renderItem={(data) => _renderAvatar(data)}
            />
        </View>
    )
}