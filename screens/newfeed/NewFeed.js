import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { dataAvatar, dataFeeds } from '../../data/data_feed'
import Header from './component/Header'
import { styles } from './styles/styles'
import Body from './component/Body'
import NavbarUser from './component/NavbarUser'

export default function NewFeed(props) {

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <NavbarUser dataAvatar={dataAvatar} />
          <Body dataFeeds={dataFeeds} />
      </ScrollView>
    </View>
  )
}