import React, {memo, PropsWithChildren} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Loader} from "../../ui";



interface ILayoutProps {
isLoading?:boolean
}

export const Layout: React.FC<PropsWithChildren<ILayoutProps>> = memo(({children,isLoading}) => {

    return (
        <SafeAreaView className={'flex-1 px-3 py-3'}>
            { isLoading? <Loader style={{flex:1}} className={'bg-amber-700'} isLoading={isLoading}/>: children}
        </SafeAreaView>
    )
})