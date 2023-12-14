import React, {useState} from 'react'
import '../styles/home.css'
import LoginModal from './LoginModal'
import api from '../controller/apiCalls'

const login = (data:any) => {
    api.userAuth(data)
}
const HomeComponent = (props:any)=>{
    //login()
    const [option, setOption] = useState(0);
    return <div className="home-wrap">
        <div className="home-header-wrap">
            <div className="home-heading-text">EduConnectHub</div>
        </div>
        <div className="home-title">
            WELCOME TO THE EduConnectHub: Your Academic Success Center
        </div>
        <div className="home-desc">
            This is your all-in-one platform for academic excellence.
            Through our user-friendly platform, students gain access to personalized portals, enabling effortless course enrollment and real-time tracking of grades.
            To access your profile, Login or Sign-up using your official emailid.
        </div>
        <div className="login-button-wrap">
            Login as:
            <div className="login-button" onClick={()=>setOption(1)}>
                Student
            </div>
            <div className="login-button" onClick={()=>setOption(2)}>
                Faculty
            </div>
            <div className="login-button" onClick={()=>setOption(3)}>
                Admin
            </div>
        </div>
        {option!=0 && <div className="login-modal-wrap">
            <LoginModal login={login} role={option==1? "student" : option==2?"instructor":"admin"}/>
            </div>}
    </div>
}
export default HomeComponent