import React from 'react'

export const Preferences = () => (
    <div className="interest-container">
        <h3>Preferences</h3>
        <hr />
        <form className="form-preferences">
            <label htmlFor="female">Female</label>
            <input name="gender" type="radio" value="female" />
            <span className="divider"></span>
            <label htmlFor="male">Male</label>
            <input name="gender" type="radio" value="male" />
        </form>
    </div>
)