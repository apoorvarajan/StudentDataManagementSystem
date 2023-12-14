import React, {useState} from 'react'

const SideBar = () =>{
    let dashBoardSections = ["Profile","Academics","Course Planning Assistant"]
    let dashboardList=[
        [{
            'Sign Up For Alerts':"/profile#alert",
            'Personal Information':"/profile#pInfo",
            'IT Accounts and Password':"/profile#itacc"
        }],
        [{
            "Academic Summary":"/academics#summary",
            "Grades":"/academics#grades",
            "Course History":"/academics#chist",
            "Transcript Request":"/academics#treq",
            "Graduation":"/academics#grad"
        }],
        [{
            "Current Courses":"/cpa#ccourses",
            "Check Requirement":"/cpa#req",
            "Browse all courses":"/cpa#browse"
        }]
    ]
    return <div className="sidebar-section">
                {dashBoardSections.map((item,key)=>{
                    const mainurl =  Object.values(dashboardList[key][0])[0] as string
                    return <div>
                                <div className="academic-sec-item" onClick={()=> window.location.href=mainurl}>{item}</div>
                                {dashboardList[key].map((subitem:any)=>{
                                    return Object.entries(subitem).map(([key,value])=>{
                                        const url = value as string
                                        return <div className="sideBar-elem" onClick={()=> window.location.href=url}>{key}</div>
                                    })
                                })}
                            </div>
                })}
            </div>
}

export default SideBar