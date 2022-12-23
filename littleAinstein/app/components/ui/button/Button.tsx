import React, {memo, PropsWithChildren} from 'react'
import {ActivityIndicator, Pressable, PressableProps, Text, TextStyle, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface IButtonProps extends PressableProps {
    title?: string
    textStyle?: TextStyle
    isLoading?: boolean

}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = memo(({children, title, textStyle,isLoading,...rest}) => {
    const childrenIsString=typeof children === 'string'
    return (
        <Pressable className={'flex-row space-x-1 justify-center bg-amber-500 rounded-xl py-2 px-3  items-center'} {...rest}>
            {isLoading?<ActivityIndicator color={'rgb(255,255,255)'}/>:
                <Icon name="ios-person" size={24} color={"rgb(255,255,255)"} />
            }
            {title ? <Text className={'text-xl font-semibold text-white'}{...textStyle}>{title}</Text> : null}
            {childrenIsString?<Text className={'text-xl font-semibold text-white'}{...textStyle}>{children}</Text>:children}
        </Pressable>
    )
})