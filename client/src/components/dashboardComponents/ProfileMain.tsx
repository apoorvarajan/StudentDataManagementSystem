// AcademicMain.tsx
import React, { useState } from 'react';

import '../../styles/profile.css';
import SignUpForAlerts from './ProfileContents/signUpForAlerts';
import PersonalInformation from './ProfileContents/personalInformation';
import ITAccountsAndPassword from './ProfileContents/ITAccountsAndPassword';
import SideBar from '../sideBar'

import api from '../../controller/apiCalls'


class ProfileMain extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    this.state={
        profiledata:null,
        hash:window.location.hash
    }
}
  componentDidMount=async()=>{
    let token = sessionStorage.getItem("token")
    let studentId=window.location.search
    let url_param = new URLSearchParams(studentId)
    let studentProfile = await api.studentProfile({"token":token,"userId":url_param.get("id")})
    this.setState({
        profiledata:studentProfile
    })
}
  render(){
    let sdetails = this.state.profiledata
    let hash = this.state.hash
    window.onhashchange = () =>{
      this.setState({
        hash:window.location.hash
      })
    }
  return (
    <div className="profile-section-wrap">
        <SideBar/>
      <div className="right-sec">
        <div>
          <div className="general-heading">{hash === "#alert" ? 'Sign Up For Alerts':
                hash === "#itacc" ? 'IT Accounts and Password' : 
                'Personal Information'}
          </div>
        </div>
        <div>
          {sdetails && hash === "#alert" ? <SignUpForAlerts sdetails={sdetails}/>:
          // sdetails && hash === "#itacc" ? <ITAccountsAndPassword sdetails={sdetails}/> : 
          sdetails ? <PersonalInformation sdetails={sdetails}/>:null}
        </div>
      </div>
    </div>
  );
}};

export default ProfileMain;
