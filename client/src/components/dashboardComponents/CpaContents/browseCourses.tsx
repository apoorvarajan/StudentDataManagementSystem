import React , {useState} from 'react'

import api from '../../../controller/apiCalls'

class BrowseCourses extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            allCourses:null
        }
    }
    submitBrowse = async () =>{
        let eDept = (document.getElementById("dept") as HTMLSelectElement);
        let eDeg = (document.getElementById("deg") as HTMLSelectElement);
        let textDept = eDept.options[eDept.selectedIndex].text;
        let textDeg = eDeg.options[eDeg.selectedIndex].text;
        let token = sessionStorage.getItem("token")
        let studentId=window.location.search
        let url_param = new URLSearchParams(studentId)
        let allCourses = await api.browseCourse({"token":token,"deg":textDeg,"dept":textDept})
        this.setState({
            allCourses:allCourses
        })
    }
    render(){
        let tableheads=["Class","Course Name","Description","Units","Requirements Satisfied"]
        let curCourseArray:any = []//this.props.scourses.courseList
        let allCourses = this.state.allCourses
    return <div className="course-history-section">
        <div className="browse-top">
            <div className="bt-sec">
                <label htmlFor="dept">Choose Department:</label>
                <select name="dept" id="dept" className="select-bt">
                    <option value="volvo">COMPSCI</option>
                </select>
            </div>
            <div className="bt-sec">
                <label htmlFor="deg">Choose Degree</label>
                <select name="deg" id="deg" className="select-bt">
                    <option value="volvo">MS</option>
                </select>
            </div>
            <div onClick={()=>this.submitBrowse()}  className="login-modal-button k">
                Submit
            </div>
        </div>
        {allCourses &&<div>
            <table className="ch-table">
                <thead>
                    <tr className="ch-rowhead">
                        {tableheads.map((elem, index) => (
                                <td className="ch-row-head-elem">{elem}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {allCourses.courseList.map((course:any, index:any) => (
                    <tr key={index} className="ch-row">
                        <td className="ch-elem">{course.courseNumber}</td>
                        <td className="ch-elem">{course.courseName}</td>
                        <td className="ch-elem">{course.dept}</td>
                        <td className="ch-elem">{course.nCredits}</td>
                        <td className="ch-elem">{course.reqSatisfiedList.map((item:any)=>{
                            return <span>{item + " | "}</span>
                        })}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>}
    </div>
    }
}

export default BrowseCourses