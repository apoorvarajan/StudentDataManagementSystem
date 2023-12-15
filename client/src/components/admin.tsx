import React, {useState} from 'react'

const AdminPage = () => {
    const [sUp,sendUpdate]= useState(false)
    return <div className="faculty-wrap">
                <div className="faculty-id">
                    AdminId: {sessionStorage.getItem("uId")}
                </div>
                {!sUp &&<div>
                    <div className="login-modal-button blah ad" onClick={()=> {
                        sendUpdate(true)
                    }}> Send Update Notification to everyone! </div>
                </div>}
                {sUp && <div>
                    Update Notification Sent!
                    </div>}
            </div>
}

export default AdminPage