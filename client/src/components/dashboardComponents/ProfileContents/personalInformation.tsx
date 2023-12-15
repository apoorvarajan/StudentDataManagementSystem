import React from 'react'

const PersonalInformation = (props:any) => {
    return <div className="signup-alert-wrap alert-sec">
                <div className="pInfo-sec">
                    <div className="profile-label">
                        Name:
                    </div>
                    <div className="profile-content">
<<<<<<< HEAD
                        John Doe
                    </div>
                </div>
                
=======
                        {props.sdetails.name.firstName + " " + (props.sdetails.name.middleName ? (props.sdetails.middleName + " ") : "") + props.sdetails.name.lastName}
                    </div>
                </div>
>>>>>>> f865a432b73b74079a1da929dcb1ed525ead011e
                <div className="pInfo-sec">
                    <div className="profile-label">
                        Address:
                    </div>
                    <div className="profile-content">
<<<<<<< HEAD
                        880, South Pleasant Street, Apt. No. 11 <br/>
                        Amherst, MA, 01002
                    </div>
                </div>
                
=======
                        {props.sdetails.address.line1} , {props.sdetails.address.city} , {props.sdetails.address.state}<br/>
                        zipcode: {props.sdetails.address.zip}
                    </div>
                </div>
>>>>>>> f865a432b73b74079a1da929dcb1ed525ead011e
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