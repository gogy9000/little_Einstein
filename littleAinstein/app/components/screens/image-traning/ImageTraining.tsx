import React, {memo} from 'react'
import {Button, Layout} from "../../ui";
import {Heading} from "../../ui";


interface IImageTrainingProps {

}

export const ImageTraining: React.FC<IImageTrainingProps> = memo(({}) => {

    return (
        <Layout>
            <Heading title={'Training'}/>
            <Button isLoading={true}>Button</Button>
        </Layout>
    )
})