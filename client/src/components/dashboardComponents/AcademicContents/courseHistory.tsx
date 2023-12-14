import React from 'react'

const CourseHistory = (props:any) =>{
    let tableheads=["Class","Course Name","Department","Grade","Units","Status","Term"]
    let prevCourseArray=props.scourses.prevCourseList
    let curCourseArray = props.scourses.courseList
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
                {prevCourseArray.map((course:any, index:any) => (
                    <tr key={index} className="ch-row">
                        <td className="ch-elem">{course.courseNumber}</td>
                        <td className="ch-elem">{course.courseName}</td>
                        <td className="ch-elem">{course.dept}</td>
                        <td className="ch-elem">{course.grade}</td>
                        <td className="ch-elem">{course.nCredits}</td>
                        <td className="ch-elem">{"Completed"}</td>
                        <td className="ch-elem">{course.semester + " " + course.year}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default CourseHistory