import React from 'react'

const PersonalInformation = (props:any) => {
    return <div className="signup-alert-wrap alert-sec">
                <div className="pInfo-sec">
                    <div className="profile-label">
                        Name:
                    </div>
                    <div className="profile-content">
                        {props.sdetails.name.fname + " " + props.sdetails.name.mname && (props.sdetails.mname + " ") + props.sdetails.name.lname}
                    </div>
                </div>
                <div className="pInfo-sec">
                    <div className="profile-label">
                        Address:
                    </div>
                    <div className="profile-content">
                        {props.sdetails.address.line1} <br/>
                        {props.sdetails.city}<br/>
                        {props.sdetails.state}<br/>
                        {props.sdetails.zip}
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                        Phone:
                    </div>
                    <div className="profile-content">
                        {props.sdetails.phone}
                    </div>
                </div>
            </div>
}
export default PersonalInformation