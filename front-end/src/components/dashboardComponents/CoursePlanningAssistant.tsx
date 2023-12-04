import React from 'react'
import '../../styles/academics.css'
import greencheck from '../../images/greencheck.jpeg'
import redcross from '../../images/redcross.jpeg'
import dropdown from '../../images/dropdown.jpg'

const CoursePlanningAssistant = (props:any) => {
    const academic_sections=['Core Requirements', 'Credits','CGPA Calculator','Concentration Requirements']
    return <div>
        <div className="home-header-wrap">
            <div className="home-heading-text">Course Planning Assistant</div>
        </div>
        <div className="academics-section-wrap">
            <div className="academics-left-section">
                {academic_sections.map((item)=>{
                    return <div className="academic-sec-item">{item}</div>
                })}
            </div>
            <div  className="academics-right-section" >
                <div className="core-req-heading">
                    Core Requirements:
                </div>
                <div className="core-req-wrap">
                    <div className="core-req-item">
                        Systems Requirement <img src={greencheck} className="req-icon"/> - COMPSCI 532
                    </div>
                    <div className="core-req-item">
                        Theory Requirement <img src={greencheck}  className="req-icon"/> - COMPSCI 611
                    </div>
                    <div className="core-req-item">
                        Machine Learning Requirement <img src={redcross}  className="req-icon"/> - <span className="req-eligible-course"> Eligible Courses <img width="15em" src={dropdown}/> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CoursePlanningAssistant