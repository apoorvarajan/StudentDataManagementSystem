import React, { useState } from 'react'

const SignUpForAlerts = (props:any) => {
    const [enableEditPhone,toggleEditPhone]=useState(false)
    const [enableEditEmail,toggleEditEmail]=useState(false)
    return <div className="signup-alert-wrap">
                <div>
                    <div className="profile-label">
                        Cell Phone Number to Receive Text Messages:
                    </div>
                    <div className="profile-content">
                        <span>
                            <input defaultValue={props.sdetails && props.sdetails.phone} className="alert-phone" disabled={true}/>
                        </span>
                        {/* {!enableEditPhone && <span className="edit" onClick={()=>toggleEditPhone(true)}>Edit</span>} */}
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                        Email Addresses to Receive Emergency Email:
                    </div>
                    <div className="profile-content">
                        <input defaultValue={props.sdetails && props.sdetails.emailId} className="alert-phone" disabled={true}/>
                        {/* {!enableEditEmail && <span className="edit"  onClick={()=>toggleEditEmail(true)}>Edit</span>} */}
                    </div>
                </div>
                
            </div>
}
export default SignUpForAlerts