import React, {memo} from 'react'

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Routes} from "./routes/Routes";


const Stack=createNativeStackNavigator()

export const Navigation: React.FC = memo(() => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {Routes.map((route,index)=><Stack.Screen key={index+route.name} {...route}/>)}
            </Stack.Navigator>
        </NavigationContainer>
    )
})