// AcademicMain.tsx
import React, { useState } from 'react';

import '../../styles/profile.css';
import SignUpForAlerts from './ProfileContents/signUpForAlerts';
import PersonalInformation from './ProfileContents/personalInformation';
import ITAccountsAndPassword from './ProfileContents/ITAccountsAndPassword';
import SideBar from '../sideBar'


const ProfileMain = (props: any) => {
  const [hash,hashChange] = useState(window.location.hash)
  window.onhashchange = () =>{
    hashChange(window.location.hash)
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
          {hash === "#alert" ? <SignUpForAlerts />:
          hash === "#itacc" ? <ITAccountsAndPassword /> : 
          <PersonalInformation />}
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
