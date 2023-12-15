import React, {useState} from 'react'

import api from '../controller/apiCalls'
const sendNotif = () => {
    const uId = (document.getElementById("uId") as HTMLInputElement)?.value
    const sub = (document.getElementById("sub") as HTMLTextAreaElement)?.value
    const body = (document.getElementById("body") as HTMLTextAreaElement)?.value
    let token = sessionStorage.getItem("token")
    api.sendNotif({user_id:uId,subject:sub,body:body})
}
const AdminPage = () => {
    const [sUp,sendUpdate]= useState(false)
    return <div className="faculty-wrap">
                <div className="faculty-id">
                    AdminId: {sessionStorage.getItem("uId")}
                </div>
                <div className="faculty-wrap2">
                    Send Notification to:
                    <div  className="inputs-faculty sub2">
                        <label htmlFor="u-id" className="login-input-field"> User Id:</label>
                        <input name="u-id" id="uId" type="text" className="login-input-field t"/>
                        <label htmlFor="sub" className="login-input-field"> Subject:</label>
                        <textarea name="sub" id="sub" rows={1} cols={50}></textarea>
                        <label htmlFor="body" className="login-input-field"> Body:</label>
                        <textarea name="body" id="body" rows={4} cols={50}></textarea>
                    </div>
                </div>
                {<div>
                    <div className="login-modal-button blah ad" onClick={()=> {
                        sendNotif()
                        sendUpdate(true)
                    }}> Send Update Notification! </div>
                </div>}
                {sUp && <div>
                    Update Notification Sent!
                    </div>}
            </div>
}

export default AdminPage