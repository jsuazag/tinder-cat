import React, { useContext } from 'react'
import { Avatar } from './ProfileDetail/Avatar'
import { Bio } from './ProfileDetail/Bio'
import { Menu } from './ProfileDetail/Menu'
import { ProfileContext } from '../../../contexts/ProfileContext'

export const Profile = () => {

    const { profilePanel } = useContext(ProfileContext)

    return (
        <div className="profile">
            { profilePanel ? 'Mostrar' : 'Ocultar' }
            <Avatar />
            <Bio />
            <Menu />
        </div>
    )
}