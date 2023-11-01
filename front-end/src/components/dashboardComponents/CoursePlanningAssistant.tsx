import React from 'react'
import '../../styles/academics.css'
import greencheck from '../../images/greencheck.jpeg'
import redcross from '../../images/redcross.jpeg'

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
                <div>
                    Core Requirements:
                </div>
                <div>
                    <div>
                        Systems Requirement <img src={greencheck} className="req-icon"/>
                    </div>
                    <div>
                        Theory Requirement <img src={greencheck}  className="req-icon"/>
                    </div>
                    <div>
                        Machine Learning Requirement <img src={redcross}  className="req-icon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CoursePlanningAssistant