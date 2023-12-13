import React, {useState} from 'react'

const sideBar = () =>{
    const [sectionId, selectSection] = useState("Academic Summary");
    const sections =["Academic Summary","Grades","Course History","Transcript Request","Graduation"]
    return <div className="academics-left-section">
                {sections.map((item)=>{
                    return <div className="academic-sec-item" onClick={()=> selectSection(item)}>{item}</div>
                })}
            </div>
}