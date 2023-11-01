import React,{useState} from 'react'
import '../styles/dashboard.css'
import '../styles/home.css'

const Dashboard = (props:any)=>{
    const sections = ['Academics','Manage Classes', 'Course Planning Assistant', 'Profile']
    return <div>
        <div className="home-header-wrap">
            <div className="home-heading-text">Dashboard</div>
        </div>
        <div className="dashboard-wrap">
            {sections.map((item)=>{
                return <div className="dashboard-item">{item}</div>
            })}
        </div>
    </div>
}
export default Dashboard