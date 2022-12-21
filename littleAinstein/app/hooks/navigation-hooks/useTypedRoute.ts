import { RootStackParamList } from '../../navigation/Navigation.types'
import { RouteProp, useRoute } from '@react-navigation/native'

export const useTypedRoute = <N extends keyof RootStackParamList>() =>
	useRoute<RouteProp<RootStackParamList, N>>()
