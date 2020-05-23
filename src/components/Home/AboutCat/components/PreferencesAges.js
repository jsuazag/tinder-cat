import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const PreferencesAges = () => {

    const onChangeHandler = (result) => {
        console.log('min: ', result[0])
        console.log('max: ', result[1])
    }

    return (
        <div className="preferences-ages-container">
            <p>Choose Age Range</p>
            <Range onChange={ onChangeHandler } min={1} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value} age`} />
        </div>
    )
}