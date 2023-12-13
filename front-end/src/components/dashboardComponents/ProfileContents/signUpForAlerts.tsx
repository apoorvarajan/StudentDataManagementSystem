import React from 'react'

const SignUpForAlerts = () =>{
    let tableheads=["Class","Description","Units","Grade","Grade Points"]
    let gradeArray={
        "Fall 2023":[{
            "class":"COMPSCI520",
            "description":"Software Engineering",
            "units":"3",
            "letter grade":"",
            "grade points":""
        },
        {
            "class":"COMPSCI687",
            "description":"Reinforcement Learning",
            "units":"3",
            "letter grade":"",
            "grade points":""
        }],
        "Spring 2024":[{
            "class":"COMPSCI589",
            "description":"Machine Learning",
            "units":"3",
            "letter grade":"A-",
            "grade points":"11.1"
        },
        {
            "class":"COMPSCI532",
            "description":"Systems for Data Science",
            "units":"3",
            "letter grade":"A",
            "grade points":"12"
        }]
    }
    return <div className="course-history-section">
        <div>
            {
               Object.entries(gradeArray).map((elem,index) =>{
                   return <div>
                                <div className="grade-term-head">{elem[0]}</div>
                                <table className="ch-table">
                                    <thead>
                                        <tr className="ch-rowhead">
                                            {tableheads.map((elem, index) => (
                                                    <td className="ch-row-head-elem">{elem}</td>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {elem[1].map((entry:any,index:any)=>{
                                            return <tr key={index} className="ch-row">
                                                <td className="ch-elem">{entry.class}</td>
                                                <td className="ch-elem">{entry.description}</td>
                                                <td className="ch-elem">{entry.units}</td>
                                                <td className="ch-elem">{entry["letter grade"]}</td>
                                                <td className="ch-elem">{entry["grade points"]}</td>
                                        </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
               })
            }
        </div>
    </div>
}

export default SignUpForAlerts