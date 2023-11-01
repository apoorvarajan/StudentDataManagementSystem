import React, {useState} from 'react'
import '../styles/home.css'
import LoginModal from './LoginModal'

const HomeComponent = (props:any)=>{
    const [option, setOption] = useState(0);
    return <div>
        <div className="home-header-wrap">
            <div className="home-heading-text">Student Portal</div>
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
            <LoginModal/>
            </div>}
    </div>
}
export default HomeComponent