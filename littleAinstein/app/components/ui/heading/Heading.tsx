import React, {memo} from 'react'
import {Text, View} from 'react-native'

interface IHeadingProps {
    title:string
}

export const Heading: React.FC<IHeadingProps> = memo(({title}) => {

    return (
        <View className={'flex-row items-center'}>
            <Text className={'text-4xl font-bold text-white'}>
                {title}
            </Text>
        </View>
    )
})