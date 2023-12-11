import React, {useState} from 'react'

import '../../styles/academics.css'
import AcademicSummary from './AcademicContents/summary'
import AcademicGrades from './AcademicContents/grades'
import CourseHistory from './AcademicContents/courseHistory'
import TranscriptRequest from './AcademicContents/transcriptRequest'
import Graduation from './AcademicContents/graduation'

const selectSection=()=>{

}
const AcademicMain = (props:any) => {
    const sections =["Academic Summary","Grades","Course History","Transcript Request","Graduation"]
    const [sectionId, selectSection] = useState("Academic Summary");
    return <div>
        <div className="home-header-wrap">
            <div className="home-heading-text">{sectionId}</div>
        </div>
        <div className="academics-section-wrap">
            <div className="academics-left-section">
                {sections.map((item)=>{
                    return <div className="academic-sec-item" onClick={()=> selectSection(item)}>{item}</div>
                })}
            </div>
            {sectionId=="Academic Summary" && <AcademicSummary/>}
            {sectionId=="Grades" && <AcademicGrades/>}
            {sectionId=="Course History" && <CourseHistory/>}
            {sectionId=="Transcript Request" && <TranscriptRequest/>}
            {sectionId=="Graduation" && <Graduation/>}
        </div>
    </div>
}

export default AcademicMain