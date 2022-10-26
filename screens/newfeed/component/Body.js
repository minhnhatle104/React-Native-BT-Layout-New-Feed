import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import Content from './Content'

export default function Body(props) {
	const { dataFeeds } = props

	const _renderFeed = () => {
		return dataFeeds.map((data, index) => {
			console.log(data)
			return <View key={index} style={styles.body}>
				<View style={styles.body__title}>
					<Image source={data.image} style={styles.avatar} />
					<View style={{ flexDirection: "column", flex: 1 }}>
						<View style={styles.body__title__text}>
							<View>
								<Text style={styles.textContent}>{data.title}</Text>
							</View>
							<View>
								<Text style={styles.textContent}>...</Text>
							</View>
						</View>
						<View style={styles.body__title__text}>
							<View>
								<Text style={styles.textHeaderDesc}>{data.name}</Text>
							</View>
							<View >
								<Text style={styles.textHeaderDesc}>{data.time}</Text>
							</View>
							<View></View>
						</View>
					</View>

				</View>
				<Content data={data} />
			</View>
		})
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{_renderFeed()}
		</ScrollView>
	)
}