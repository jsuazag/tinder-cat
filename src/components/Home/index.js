import React, { useState, useEffect } from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContext } from '../../contexts/ProfileContext'

export const Home = () => {

    const [ profilePanel, setProfilePanel ] = useState(false)

    useEffect( () =>{
        const showState = window.innerWidth > 768 //true si se cumple > 768
        setProfilePanel(showState)
    }, [])
    
    return (
        <div className="home-page">
            <ProfileContext.Provider value={{ profilePanel, setProfilePanel }}>
                <Profile />
                <ViewCats />
                <AboutCat />
            </ProfileContext.Provider>
        </div>
    )
}