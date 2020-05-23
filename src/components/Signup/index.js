import React from 'react'
import Logo from '../../static/logo-login.png'

export const Signup = () => (
    <div className="login">
        <form>
            <img src={ Logo } />
            <h3>Sign Up</h3>
            <input type="radio" name="gender" value="Female" /><label>Female</label>
            <input type="radio" name="gender" value="Male" /><label>Male</label>
            <div className="input-custom">
                <label>Name </label>
                <input type="text" />
            </div>
            <div className="input-custom">
                <label>Username</label>
                <input type="text" />
            </div>
            <div className="input-custom">
                <label>Birthday</label>
                <input type="date" />
            </div>
            <div className="input-custom">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="input-custom">
                <label>Phone</label>
                <input type="text" />
            </div>
            <div className="input-custom">
                <label>Bio</label>
                <textarea></textarea>
            </div>
            <div className="input-custom">
                <label>Password</label>
                <input type="password" />
            </div>
            <br />
            <div className="button-primary">
                <input type="button" value="Sign Up" />
            </div>
        </form>
    </div>
)