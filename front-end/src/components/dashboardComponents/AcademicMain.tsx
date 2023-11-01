import React from 'react'
import '../../styles/academics.css'

const AcademicMain = (props:any) => {
    const academic_sections=['Academic Summary', 'Grades','Course History','Transcript Request','Graduation']
    return <div>
        <div className="home-header-wrap">
            <div className="home-heading-text">Academics</div>
        </div>
        <div className="academics-section-wrap">
            <div className="academics-left-section">
                {academic_sections.map((item)=>{
                    return <div className="academic-sec-item">{item}</div>
                })}
            </div>
            <div  className="academics-right-section" >
                <div>
                    <div className="academic-label">
                        Advisor:
                    </div>
                    <div className="academic-content">
                        Elizabeth Parolski
                    </div>
                </div>
                <div>
                    <div className="academic-label">
                        Major:
                    </div>
                    <div className="academic-content">
                        Computer Science
                    </div>
                </div>
                <div>
                    <div className="academic-label">
                        Academic Statistics:
                    </div>
                    <div className="academic-content academic-stat-content">
                        <div>
                            Credits earned: 18
                        </div>
                        <div>
                            Transferred credits:0
                        </div>
                        <div>
                            CGPA:4.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AcademicMain