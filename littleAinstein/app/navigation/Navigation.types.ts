import {ComponentType} from "react";

export type RootStackParamList={
    Home:undefined
    ImageTraining:undefined
}
export type RouteType={
    name:keyof RootStackParamList
    component:ComponentType
}