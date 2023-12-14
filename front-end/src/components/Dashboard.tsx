import React,{useState} from 'react'
import '../styles/dashboard.css'
import '../styles/home.css'
import DashboardSummary from './dashboardComponents/dashboardSummary'

const Dashboard = (props:any)=>{
    const today_date = new Date()
    let hours = today_date.getHours();
    let greeting = (hours < 12)? "Good Morning " :
             ((hours <= 18 && hours >= 12 ) ? "Good Afternoon " : "Good Evening ");
    const datestring=today_date.toDateString()
    let sname = "[Student Name]"
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
    return <div className="dashboard-page">
        <div className="home-header-wrap">
            <div className="home-heading-text">Dashboard</div>
        </div>
        <div className="dashbpoard-wrap">
            <div className="dashboard-greeting-wrap">
                <div className="greeting-dashboard">
                    {greeting+ sname + "!"}
                </div>
                <div className="dashboard-date"> Today is {datestring}</div>
            </div>
            <div className="dashboard-item-wrap">
                {dashBoardSections.map((item,key)=>{
                    return <div  className="dashboard-item">
                            <div className="dashboard-heading">{item}</div>
                            <div className="sub-item-wrap">
                                {dashboardList[key].map((subitem:any)=>{
                                    return Object.entries(subitem).map(([elem,redirect])=>{
                                        const url = redirect as string;
                                        return <div className="dashboard-sub-item" onClick={()=> window.location.href=url}>{elem}</div>
                                    })
                                })}
                            </div>
                        </div>
                })}
            </div>
            <div>
                    <div className="todo-heading-dashboard"> To-Do</div>
                    <div className="paper">
                        <div className="pattern">
                            You don't have any tasks pending!
                        </div>
                    </div>
                </div>
        </div>
    </div>
}
export default Dashboard