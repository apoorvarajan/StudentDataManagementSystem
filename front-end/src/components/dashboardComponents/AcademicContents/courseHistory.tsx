import React from 'react'

const CourseHistory = () =>{
    let tableheads=["Class","Description","Term","Grade","Units","Status"]
    let courseArray=[
        {
            "class":"COMPSCI520",
            "description":"Software Engineering",
            "term":"Fall2023",
            "grade":"A",
            "units":"3",
            "status":"Completed"
        },
        {
            "class":"COMPSCI687",
            "description":"Reinforcement Learning",
            "term":"Fall2023",
            "grade":"A",
            "units":"3",
            "status":"Completed"
        }
    ]
    return <div className="course-history-section">
        <div>
            <table className="ch-table">
                <thead>
                    <tr className="ch-rowhead">
                        {tableheads.map((elem, index) => (
                                <td className="ch-row-head-elem">{elem}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {courseArray.map((course, index) => (
                    <tr key={index} className="ch-row">
                        <td className="ch-elem">{course.class}</td>
                        <td className="ch-elem">{course.description}</td>
                        <td className="ch-elem">{course.term}</td>
                        <td className="ch-elem">{course.grade}</td>
                        <td className="ch-elem">{course.units}</td>
                        <td className="ch-elem">{course.status}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default CourseHistory