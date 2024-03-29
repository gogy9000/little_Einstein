import React, { memo } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from './routes/Routes'
import { RootStackParamList } from './Navigation.types'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { BottomMenu } from '../components/ui/bottomNavigation/bottomMenu/BottomMenu'
import { useNavigatorOutData } from './useNavigatorOutData'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigation: React.FC = memo(() => {
	const { screenListeners, currentRoute, currentNavigation } =
		useNavigatorOutData()

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					screenListeners={screenListeners}
					initialRouteName={'Home'}
					screenOptions={{
						orientation: 'portrait',
						headerShown: false,
						contentStyle: {
							backgroundColor: Colors.darker
						}
					}}
				>
					{Routes.map((route, index) => (
						<Stack.Screen key={index + route.name} {...route} />
					))}
				</Stack.Navigator>
			</NavigationContainer>
			<BottomMenu currentRoute={currentRoute} navigation={currentNavigation} />
		</>
	)
})
