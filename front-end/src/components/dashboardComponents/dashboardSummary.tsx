import React from 'react'

const DashboardSummary = (props:any) => {
    return <div  className="academics-right-section" >
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
                        Degree:
                    </div>
                    <div className="academic-content">
                        Master of Science
                    </div>
                </div>
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
                        Current Courses
                    </div>
                    <div className="academic-content academic-stat-content">
                        <div>
                            COMPSCI 520: Software Engineering
                        </div>
                        <div>
                            COMPSCI 687: Reinforcement Learning
                        </div>
                        <div>
                            COMPSCI 589: Machine Learning
                        </div>
                    </div>
                </div>
            </div>
}
export default DashboardSummary