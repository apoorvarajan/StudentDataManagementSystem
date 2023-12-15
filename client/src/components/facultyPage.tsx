import React from 'react'

import api from '../controller/apiCalls'

class FacultyPage extends React.Component<any,any>{
    constructor(props:any){
        super(props)
    }
    setGrade =()=>{
        const sId = (document.getElementById("sId") as HTMLInputElement)?.value
        const cId = (document.getElementById("cId") as HTMLInputElement)?.value
        const sGrade = (document.getElementById("sGrade") as HTMLInputElement)?.value
        let token = sessionStorage.getItem("token")
        api.gradeUpload({userId:sId,token:token,courseId:cId,grade:sGrade})
    }
    setCourseDesc = () => {
        const cId = (document.getElementById("cId2") as HTMLInputElement)?.value
        const cDesc = (document.getElementById("cDesc") as HTMLTextAreaElement)?.value
        let token = sessionStorage.getItem("token")
        api.setCourseDesc({cId:cId,token:token,courseDesc:cDesc,})
    }
    render(){
        return <div className="faculty-wrap">
            <div className="faculty-id">
                FacultyId: {sessionStorage.getItem("uId")}
            </div>
            <div className="faculty-wrap2">
                <div>
                    Enter student Id, Course Id and Grade below
                </div>
                <div className="inputs-faculty">
                    <label htmlFor="s-id" className="login-input-field"> Student Id:</label>
                    <input name="s-id" id="sId" type="text" className="login-input-field t"/>
                    <label htmlFor="c-id" className="login-input-field"> Course Id:</label>
                    <input name="c-id" id="cId" type="text" className="login-input-field t"/>
                    <label htmlFor="s-grade" className="login-input-field"> Grade:</label>
                    <input name="s-grade" id="sGrade" type="text" className="login-input-field t"/>
                </div>
                <div className="login-modal-button k" onClick={()=>this.setGrade()}>
                    Submit
                </div>
            </div>
            <div className="faculty-wrap2">
                <div>
                    Enter Course Id and Course Description
                </div>
                <div className="inputs-faculty">
                    <label htmlFor="c-id" className="login-input-field"> Course Id:</label>
                    <input name="c-id2" id="cId2" type="text" className="login-input-field t"/>
                    <label htmlFor="c-desc" className="login-input-field"> Course Description:</label>
                    <textarea name="c-desc" id="cDesc" rows={4} cols={50}></textarea>
                </div>
                <div className="login-modal-button k" onClick={()=>this.setCourseDesc()}>
                    Submit
                </div>
            </div>
        </div>
    }
}

export default FacultyPage