import React, {useState} from 'react'

const CurrentCourses = (props:any) => {
    let tableheads=["Class","Course Name","Department","Grade","Units","Status","Term"]
    let curCourseArray:any = props.scourses.courseList
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
                {curCourseArray.map((course:any, index:any) => (
                    <tr key={index} className="ch-row">
                        <td className="ch-elem">{course.courseNumber}</td>
                        <td className="ch-elem">{course.courseName}</td>
                        <td className="ch-elem">{course.dept}</td>
                        <td className="ch-elem">{" "}</td>
                        <td className="ch-elem">{course.nCredits}</td>
                        <td className="ch-elem">{"In Progress"}</td>
                        <td className="ch-elem">{"Current Semester"}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default CurrentCourses