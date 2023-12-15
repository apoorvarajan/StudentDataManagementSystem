import React, {useState} from 'react'

import '../../styles/academics.css'
import AcademicSummary from './AcademicContents/summary'
import AcademicGrades from './AcademicContents/grades'
import CourseHistory from './AcademicContents/courseHistory'
import TranscriptRequest from './AcademicContents/transcriptRequest'
import Graduation from './AcademicContents/graduation'
import SideBar from '../sideBar'

import api from '../../controller/apiCalls'

class AcademicMain extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            profiledata:null,
            studentCourses:null,
            hash:window.location.hash
        }
    }
    componentDidMount = async () => {
        let token = sessionStorage.getItem("token")
        let studentId=window.location.search
        let url_param = new URLSearchParams(studentId)
        let studentProfile = await api.studentProfile({"token":token,"userId":url_param.get("id")})
        let studentCourses = await api.studentCourse({"token":token,"userId":url_param.get("id")})
        this.setState({
            profiledata:studentProfile,
            studentCourses:studentCourses
        })
    }
    render(){
        let sdetails = this.state.profiledata
        let scourses = this.state.studentCourses
        let hash = this.state.hash
        window.onhashchange = () =>{
          this.setState({
            hash:window.location.hash
          })
        }
    return (
        <div className="profile-section-wrap">
            <SideBar/>
        <div className="right-sec">
            <div>
            <div className="general-heading">{hash === "#grades" ? 'Grades':
                    hash === "#chist" ? 'Course History' : 
                    hash === "#treq" ? "Transcript Request":
                    hash === "#grad" ? "Graduation":
                    'Academic Summary'}
            </div>
            </div>
            <div>
            {hash === "#grades" && sdetails ? <AcademicGrades scourses={scourses}/>:
                    hash === "#chist" && sdetails ? <CourseHistory scourses={scourses}/> : 
                    hash === "#treq" && sdetails ? <TranscriptRequest/>:
                    hash === "#grad" && sdetails ? <Graduation  sdetails={sdetails}/>:
                    sdetails && <AcademicSummary sdetails={sdetails}/>}
            </div>
        </div>
        </div>
    );
    }
}

export default AcademicMain