import React from 'react'

const AcademicSummary = (props:any) => {
    return <div  className="academics-right-section" >
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
}
export default AcademicSummary