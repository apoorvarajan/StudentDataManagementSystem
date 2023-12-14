import React, { useState } from 'react'

const SignUpForAlerts = (props:any) => {
    const [enableEditPhone,toggleEditPhone]=useState(false)
    const [enableEditEmail,toggleEditEmail]=useState(false)
    return <div className="signup-alert-wrap">
                <div className="alert-sec">
                    <div className="profile-label">
                        Cell Phone Number to Receive Text Messages:
                    </div>
                    <div className="profile-content">
                        <span>
                            <input defaultValue="4138476204" className="alert-phone" disabled={enableEditPhone}/>
                        </span>
                        {!enableEditPhone && <span className="edit" onClick={()=>toggleEditPhone(true)}>Edit</span>}
                    </div>
                </div>
                <div className="alert-sec">
                    <div className="profile-label">
                        Email Addresses to Receive Emergency Email:
                    </div>
                    <div className="profile-content">
                        <input defaultValue="apoorvarajan@umass.edu" className="alert-phone" disabled={enableEditEmail}/>
                        {!enableEditEmail && <span className="edit"  onClick={()=>toggleEditEmail(true)}>Edit</span>}
                    </div>
                </div>
                
            </div>
}
export default SignUpForAlerts