import React,{useState} from 'react'
import '../styles/dashboard.css'
import '../styles/home.css'

const Dashboard = (props:any)=>{
    const sections = [['Academics','/academics'],['Manage Classes','/manageclass'],['Course Planning Assistant','/cpa'], 'Profile']
    return <div>
        <div className="home-header-wrap">
            <div className="home-heading-text">Dashboard</div>
        </div>
        <div className="dashboard-wrap">
            {sections.map((item)=>{
                return <div className="dashboard-item" href={item[1]}>{item[0]}</div>
            })}
        </div>
    </div>
}
export default Dashboard