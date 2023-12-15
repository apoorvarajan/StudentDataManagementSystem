import React,{useState} from 'react'
import '../styles/dashboard.css'
import '../styles/home.css'
import api from '../controller/apiCalls'
class Dashboard extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={
            profiledata:null,
            studentCourses:null,
        }
    }
    componentDidMount= async ()=>{
        let token = sessionStorage.getItem("token")
        let studentId=window.location.search
        let url_param = new URLSearchParams(studentId)
        let studentProfile = await api.studentProfile({token:token,userId:url_param.get("id")})
        this.setState({
            profiledata:studentProfile
        })
    }
    render(){
    let sdetails = this.state.profiledata
    const today_date = new Date()
    let hours = today_date.getHours();
    let greeting = (hours < 12)? "Good Morning " :
             ((hours <= 18 && hours >= 12 ) ? "Good Afternoon " : "Good Evening ");
    const datestring=today_date.toDateString()
    let sname = sdetails && sdetails.name && sdetails.name.firstName
    let studentId=window.location.search
    let url_param = new URLSearchParams(studentId)
    let uId=url_param.get("id")
    let dashBoardSections = ["Profile","Academics","Course Planning Assistant"]
    let dashboardList=[
        [{
            'Sign Up For Alerts':"/profile?"+uId+"#alert",
            'Personal Information':"/profile?"+uId+"#pInfo",
            // 'IT Accounts and Password':"/profile#itacc"
        }],
        [{
            "Academic Summary":"/academics?"+uId+"#summary",
            "Grades":"/academics?"+uId+"#grades",
            "Course History":"/academics?"+uId+"#chist",
            "Transcript Request":"/academics?"+uId+"#treq",
            "Graduation":"/academics?"+uId+"#grad"
        }],
        [{
            "Current Courses":"/cpa?"+uId+"#ccourses",
            "Check Requirement":"/cpa?"+uId+"#req",
            "Browse all courses":"/cpa?"+uId+"#browse"
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
}}
export default Dashboard