import React from 'react'

const PersonalInformation = (props:any) => {
    return <div  className="profile-right-section" >
                <div>
                    <div className="profile-label">
                    Name:
                    </div>
                    <div className="profile-content">
                        John Doe
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                    Pronouns:
                    </div>
                    <div className="profile-content">
                        he/him
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                    Address:
                    </div>
                    <div className="profile-content">
                    Physical Address: 880, South Pleasant Street, Apt. No. 11 <br />
                    City: Amherst  State: MA  Postal: 01002
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                    Emergency Contact:
                    </div>
                    <div className="profile-content">
                        Contact Name: Jack Doe <br />
                        Relationship: Friend <br />
                        Telephone: +1413123456
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                    Non-UMass Email:
                    </div>
                    <div className="profile-content">
                        johnd@gmail.com
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
                <div>
                    <div className="profile-label">
                    UMass Amherst Emergency Alerts:
                    </div>
                    <div className="profile-content">
                        UMass email id: johndoe@umass.edu
                        Non-UMass email id: johnd@gmail.com
                        Phone: +1413224765
                    </div>
                </div>
                
            </div>
}
export default PersonalInformation