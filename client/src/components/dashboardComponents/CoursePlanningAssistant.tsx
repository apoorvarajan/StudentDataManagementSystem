import React, {useState} from 'react'

import '../../styles/academics.css'
import greencheck from '../../images/greencheck.jpeg'
import redcross from '../../images/redcross.jpeg'
import dropdown from '../../images/dropdown.jpg'
import SideBar from '../sideBar'
import CurrentCourses from './CpaContents/currentCourses'
import BrowseCourses from './CpaContents/browseCourses'
import CheckReq from './CpaContents/checkReq'

const CoursePlanningAssistant = (props:any) => {
    const [hash,hashChange] = useState(window.location.hash)
  window.onhashchange = () =>{
    hashChange(window.location.hash)
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
          <CurrentCourses />}
        </div>
      </div>
    </div>
  );
}

export default CoursePlanningAssistant