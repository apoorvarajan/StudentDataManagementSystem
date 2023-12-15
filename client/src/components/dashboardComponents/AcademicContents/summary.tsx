import React from 'react'

const AcademicSummary = (props:any) => {
    return <div  className="academics-right-section" >
                <div>
                    <div className="academic-label">
                        Advisor:
                    </div>
                    <div className="academic-content">
                        {props.sdetails.advisor}
                    </div>
                </div>
                <div>
                    <div className="academic-label">
                        Program
                    </div>
                    <div className="academic-content">
                        {props.sdetails.degree + " "}
                    </div>
                </div>
                <div>
                    <div className="academic-label">
                        Academic Statistics:
                    </div>
                    <div className="academic-content academic-stat-content">
                        <div>
                            CGPA: {" "+props.sdetails.gpa}
                        </div>
                    </div>
                </div>
            </div>
}
export default AcademicSummary