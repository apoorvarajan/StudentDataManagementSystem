import React from 'react'

const LoginModal = (props:any) => {
    return <div className="login-modal-container">
        <div className="login-modal-input-wrap">
            <div className="login-modal-input">
                <label htmlFor="user-id"> User Id:</label>
                <input name="user-id" id="userId" type="text"/>
            </div>
            <div className="login-modal-input">
                <label htmlFor="password"> Password:</label>
                <input name="password" id="pwd" type="password"/>
            </div>
        </div>
        <div className="login-modal-submit-button-wrap">
            <div>
                Login
            </div>
        </div>
    </div>
}

export default LoginModal