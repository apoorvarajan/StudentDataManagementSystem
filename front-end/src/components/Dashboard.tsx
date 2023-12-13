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
        []
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
                {/* <div>
                    <div className="todo-heading-dashboard"> To-Do</div>
                    <div className="paper">
                        <div className="pattern">
                            You don't have any tasks pending!
                        </div>
                    </div>
                </div> */}
            <div>
                {dashBoardSections.map((item)=>{
                    return <div  className="dashboard-item">
                            <div>{item}</div>
                        </div>
                })}
            </div>
        </div>
    </div>
}
export default Dashboard