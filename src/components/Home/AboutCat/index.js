import React from 'react'
import { Interest } from './components/Interests'
import { Preferences } from './components/Preferences'
import { PreferencesAges } from './components/PreferencesAges'

export const AboutCat = () => {

    return (
        <div className="about-cat">
            <Preferences />
            <PreferencesAges />
            <Interest />
        </div>
    )
}