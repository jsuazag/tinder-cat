import React, { useState } from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
import { CAT_LIST } from '../../../../data/db'

export const Navigation = () => {

    ///acá pondremos mas funciones // cat = CAT_LIST[0] no funciona tan asi
    const [ cat, setCat ] = useState(CAT_LIST[1]) 

    const goBack = () => {
        console.log('go back...')
        setCat(CAT_LIST[0])
    }

    const goNext = () => {
        console.log('go next...')
        setCat(CAT_LIST[2])
    }

    return (
        <div className="navigation">
            <NavigationIcon onPress={ goBack } name="arrow-undo" />
            <Couple
                image={ cat.image }
                username={ cat.username }
                description={ cat.description }
            />
            <NavigationIcon onPress={ goNext } name="arrow-redo" />
        </div>
    )
}
