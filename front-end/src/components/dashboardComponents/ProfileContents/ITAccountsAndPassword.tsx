import React from 'react'

const ITAccountsAndPassword = (props:any) => {
    return <div  className="profile-right-section" >
                <div>
                    <div className="profile-label">
                    My IT Account:
                    </div>
                    <div className="profile-content">
                        Account Name: johndoe <br />
                        Type: NetID <br />
                        Date Created: 04/24/2021 <br />
                        Password Changed: 10/13/23 <br />
                        Email Type: Google <br />
                    </div>
                </div>
                <div>
                    <div className="profile-label">
                    UCard / Library Barcode:
                    </div>
                    <div className="profile-content">
                        Spire ID: 12345678 <br />
                        Name: John Doe <br />
                        Card Type: Student <br />
                        Run / ISO Number: 123456-123456789-1 <br />
                        Library Barcode: 123456789123456 <br />
                    </div>
                </div>
                
            </div>
}

export default ITAccountsAndPassword