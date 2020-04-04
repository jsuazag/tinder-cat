import React, { useContext } from 'react'
import { Interest } from './components/Interests'
import { MsgContext } from '../../../contexts/MsgContext'

export const AboutCat = () => {

    const message = useContext(MsgContext)

    return (
        <div className="about-cat">
            About cat
            <br /><br />
            { message }
            <Interest />
        </div>
    )
}