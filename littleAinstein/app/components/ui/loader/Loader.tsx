import React, {memo} from 'react'
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native'


interface ILoaderProps extends ActivityIndicatorProps {
    isLoading: boolean

}

export const Loader: React.FC<ILoaderProps> = memo(({isLoading, ...rest}) => {
    if (isLoading) {
        return <ActivityIndicator color={'rgb(196,142,7)'} size={'large'} {...rest} />
    } else {
        return null
    }

})