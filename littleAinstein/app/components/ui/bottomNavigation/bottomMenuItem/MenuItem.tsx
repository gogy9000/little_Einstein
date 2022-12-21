import React, { memo } from 'react'
import { Pressable, Text } from 'react-native'
import { MenuItemType } from './MenuItemTypes'
import { RootStackParamList } from '../../../../navigation/Navigation.types'
import cn from 'clsx'

interface IMenuItemProps {
	onPress: (path: keyof RootStackParamList) => void
	currentRoute?: keyof RootStackParamList
	item: MenuItemType
}

export const MenuItem: React.FC<IMenuItemProps> = memo(
	({ currentRoute, item, onPress }) => {
		const isActive = currentRoute === item.path

		const onPressHandler = () => {
			onPress(item.path)
		}

		return (
			<Pressable onPress={onPressHandler}>
				<Text
					className={cn('font-bold text-2xl',isActive&&'text-xl text-red-500')}
				>
					{item.path}
				</Text>
			</Pressable>
		)
	}
)
