import { useCallback, useMemo, useState } from 'react'
import { RootStackParamList, TypeNavigate } from './Navigation.types'
import { RouteProp } from '@react-navigation/core/lib/typescript/src/types'

type screenListenersParamsType = {
	route: RouteProp<RootStackParamList>
	navigation: { navigate: TypeNavigate }
}

export const useNavigatorOutData = () => {
	const [currentRoute, setCurrentRoute] = useState<
		keyof RootStackParamList | undefined
	>(undefined)
	const [currentNavigation, setCurrentNavigation] = useState<
		{ navigate: TypeNavigate } | undefined
	>(undefined)

	const screenListeners = useCallback(
		({ route, navigation }: screenListenersParamsType) => ({
			state() {
				setCurrentRoute(route.name)

				setCurrentNavigation(navigation)
			}
		}),
		[]
	)

	return useMemo(
		() => ({ screenListeners, currentRoute, currentNavigation }),
		[currentRoute, currentNavigation]
	)
}
