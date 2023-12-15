import React, {useState} from 'react'

const SideBar = () =>{
    let studentId=window.location.search
    let url_param = new URLSearchParams(studentId)
    let uId=sessionStorage.getItem("uId")
    let dashBoardSections = ["Profile","Academics","Course Planning Assistant"]
    let dashboardList=[
        [{
            'Sign Up For Alerts':"/profile?id="+uId+"#alert",
            'Personal Information':"/profile?id="+uId+"#pInfo",
            // 'IT Accounts and Password':"/profile#itacc"
        }],
        [{
            "Academic Summary":"/academics?id="+uId+"#summary",
            "Grades":"/academics?id="+uId+"#grades",
            "Course History":"/academics?id="+uId+"#chist",
            "Transcript Request":"/academics?id="+uId+"#treq",
            "Graduation":"/academics?id="+uId+"#grad"
        }],
        [{
            "Current Courses":"/cpa?id="+uId+"#ccourses",
            "Check Requirement":"/cpa?id="+uId+"#req",
            "Browse all courses":"/cpa?id="+uId+"#browse"
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