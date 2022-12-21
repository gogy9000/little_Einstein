import { RootStackParamList } from '../../../../navigation/Navigation.types'

export type MenuItemType = {
	iconName: string
	path: keyof RootStackParamList
}
