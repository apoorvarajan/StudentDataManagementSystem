import React from 'react'
import '../../styles/academics.css'

const ManageClasses = (props:any) => {
    const academic_sections=['View My Classes', 'Class Search','Cart','Class Schedule']
    return <div>
        <div className="home-header-wrap">
            <div className="home-heading-text">Manage Class</div>
        </div>
        <div className="academics-section-wrap">
            <div className="academics-left-section">
                {academic_sections.map((item)=>{
                    return <div className="academic-sec-item">{item}</div>
                })}
            </div>
            <div  className="academics-right-section" >
                <div className="myclasses-wrap">
                    <div className="myclass-classtitle">
                        COMPSCI 520: Theory and Practice of Software Engineering
                    </div>
                    <div className="myclass-class-details">
                        <div className="myclass-details-elem">Instructor: Heather Conboy</div>
                        <div  className="myclass-details-elem"> Time: 10:00 to 11:15</div>
                        <div  className="myclass-details-elem"> Room: Thompson Hall room 102</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ManageClasses