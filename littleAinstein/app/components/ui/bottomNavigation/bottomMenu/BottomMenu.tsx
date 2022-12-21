import React, { memo, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import {
	RootStackParamList,
	TypeNavigate
} from '../../../../navigation/Navigation.types'
import { MenuItemData } from '../bottomMenuItem/MenuItemData'
import { MenuItem } from '../bottomMenuItem/MenuItem'

interface IBottomMenuProps {
	navigation?: { navigate: TypeNavigate }
	currentRoute?: keyof RootStackParamList
}

export const BottomMenu: React.FC<IBottomMenuProps> = memo(
	({ navigation, currentRoute }) => {
		const onNavigate = useCallback(
			(path: keyof RootStackParamList) => {
				navigation?.navigate(path)
			},
			[navigation]
		)

		const mappedMenuItem = useMemo(
			() =>
				MenuItemData.map(item => (
					<MenuItem
						onPress={onNavigate}
						key={item.path}
						currentRoute={currentRoute}
						item={item}
					/>
				)),
			[currentRoute, navigation]
		)

		return (
			<View
				className={
					'w-full h-10 bg-amber-500 flex-row items-center  justify-around '
				}
			>
				{mappedMenuItem}
			</View>
		)
	}
)
