import React, { memo } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useTypedNavigation } from '../../../hooks/navigation-hooks/useTypedNavigation'

export const Home: React.FC = memo(() => {
	const { navigate } = useTypedNavigation()

	const onPress = () => {
		navigate('ImageTraining')
	}
	return (
		<View>
			<Text className={'text-white font-bold'}>Home</Text>
			<Pressable onPress={onPress} className={'w-full h-12 bg-amber-500'}>
				<Text>training</Text>
			</Pressable>
		</View>
	)
})
