import React, { useState } from 'react'

const SignUpForAlerts = (props:any) => {
    return <div className="signup-alert-wrap">
                <div>
                    <div className="profile-label">
                        Cell Phone Number to Receive Text Messages:
                    </div>
                    <div className="profile-content">
                        <span>
                            <input defaultValue={props.sdetails && props.sdetails.phone} className="alert-phone" disabled={true}/>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                        Email Addresses to Receive Emergency Email:
                    </div>
                    <div className="profile-content">
                        <input defaultValue={props.sdetails && props.sdetails.emailId} className="alert-phone" disabled={true}/>
                    </div>
                </div>
                
            </div>
}
export default SignUpForAlerts