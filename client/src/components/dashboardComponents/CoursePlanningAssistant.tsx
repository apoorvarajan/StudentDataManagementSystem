import React, {useState} from 'react'
import '../../styles/academics.css'
import SideBar from '../sideBar'
import CurrentCourses from './CpaContents/currentCourses'
import BrowseCourses from './CpaContents/browseCourses'
import CheckReq from './CpaContents/checkReq'

import api from '../../controller/apiCalls'

class CoursePlanningAssistant extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    this.state={
      profiledata:null,
      studentCourses:null,
      allCourses:null,
      hash:"#pInfo"
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
          <div className="general-heading">{hash === "#req" ? 'Check Requirements':
          hash === "#browse" ? 'Browse Courses' : 
          'Current Courses'}
          </div>
        </div>
        <div>
          {hash === "#ccourses" ? <CheckReq />:
          hash === "#browse" ? <BrowseCourses /> : 
          scourses && <CurrentCourses scourses={scourses}/>}
        </div>
      </div>
    </div>
  );
  }
}

export default CoursePlanningAssistant