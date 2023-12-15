import React from 'react'

const PersonalInformation = (props:any) => {
    return <div className="signup-alert-wrap alert-sec">
                <div className="pInfo-sec">
                    <div className="profile-label">
                        Name:
                    </div>
                    <div className="profile-content">
                        John Doe
                    </div>
                </div>
                
                <div className="pInfo-sec">
                    <div className="profile-label">
                        Address:
                    </div>
                    <div className="profile-content">
                        880, South Pleasant Street, Apt. No. 11 <br/>
                        Amherst, MA, 01002
                    </div>
                </div>
                
                <div>
                    <div className="profile-label">
                        Phone:
                    </div>
                    <div className="profile-content">
                        +1413224765
                    </div>
                </div>
            </div>
}
export default PersonalInformation