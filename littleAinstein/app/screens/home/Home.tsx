import React, {memo} from 'react'
import {Text, View} from 'react-native'



export const Home: React.FC = memo(() => {

    return (
        <View>
            <Text className={'text-white font-bold text-4xl'}>
                Home
            </Text>
        </View>
    )
})