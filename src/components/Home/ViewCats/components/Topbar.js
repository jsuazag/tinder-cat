import React, { useContext } from 'react'
import Logo from '../../../../static/logo-color.svg'
import { TopbarIcon } from './Topbar-icon'
import { ProfileContext } from '../../../../contexts/ProfileContext'

const logoStyle = {
    flex: 1,
    textAlign: 'center'
}

export const Topbar = () => {

    const { profilePanel } = useContext(ProfileContext)

    return (
        <div className="topbar">
            { profilePanel ? 'mostrar' : 'ocultar' }
            <TopbarIcon name="menu-outline" />
            <div style={ logoStyle }>
                <img width="200" src={ Logo } />
            </div>
            <TopbarIcon badge="6" name="notifications-outline" />
        </div>
    )
}