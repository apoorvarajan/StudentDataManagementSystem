// AcademicMain.tsx
import React, { useState } from 'react';

import '../../styles/profile.css';
import SignUpForAlerts from './ProfileContents/signUpForAlerts';
import PersonalInformation from './ProfileContents/personalInformation';
import ITAccountsAndPassword from './ProfileContents/ITAccountsAndPassword';


const ProfileMain = (props: any) => {
  const sections = [
    'Sign Up For Alerts',
    'Personal Information',
    'IT Accounts and Password',
  ];

  const [sectionId, selectSection] = useState('Profile Information');

  return (
    <div>
      <div className="home-header-wrap">
        <div className="home-heading-text">{sectionId}</div>
      </div>
      <div className="profile-section-wrap">
        <div className="profile-left-section">
          {sections.map((item) => (
            <div
              key={item}
              className="profile-sec-item"
              onClick={() => selectSection(item)}
            >
              {item}
            </div>
          ))}
        </div>
        {sectionId === 'Sign Up For Alerts' && <SignUpForAlerts />}
        {sectionId === 'Personal Information' && <PersonalInformation />}
        {sectionId === 'IT Accounts and Password' && <ITAccountsAndPassword />}

      </div>
    </div>
  );
};

export default ProfileMain;
