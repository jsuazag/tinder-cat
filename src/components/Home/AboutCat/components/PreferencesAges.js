import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const PreferencesAges = ({ ageMin = 3, ageMax = 10 }) => {

    const [min, setMin] = useState(ageMin)
    const [max, setMax] = useState(ageMax)

    const onChangeHandler = (result) => {
        setMin(result[0])
        setMax(result[1])
    }

    return (
        <div className="preferences-ages-container">
            <p>Choose Age Range</p>
            <Range railStyle={{ backgroundColor: '#9e3bec' }} 
                onChange={ onChangeHandler } min={1} max={20}
                defaultValue={[ageMin, ageMax]} tipFormatter={value => `${value} age`} />
        </div>
    )
}