import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../navigation/Navigation.types'

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<RootStackParamList>>()
