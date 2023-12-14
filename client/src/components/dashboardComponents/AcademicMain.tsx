import React, {useState} from 'react'

import '../../styles/academics.css'
import AcademicSummary from './AcademicContents/summary'
import AcademicGrades from './AcademicContents/grades'
import CourseHistory from './AcademicContents/courseHistory'
import TranscriptRequest from './AcademicContents/transcriptRequest'
import Graduation from './AcademicContents/graduation'
import SideBar from '../sideBar'

const selectSection=()=>{

}
const AcademicMain = (props:any) => {
    const [hash,hashChange] = useState(window.location.hash)
    window.onhashchange = () =>{
        hashChange(window.location.hash)
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
            {hash === "#grades" ? <AcademicGrades/>:
                    hash === "#chist" ? <CourseHistory/> : 
                    hash === "#treq" ? <TranscriptRequest/>:
                    hash === "#grad" ? <Graduation/>:
                    <AcademicSummary/>}
            </div>
        </div>
        </div>
    );
}

export default AcademicMain