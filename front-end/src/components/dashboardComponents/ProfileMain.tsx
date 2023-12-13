// AcademicMain.tsx
import React, { useState } from 'react';

import '../../styles/profile.css';
import infoForAlerts from './ProfileContents/signUpForAlerts';
import studentPersonalInfo from './ProfileContents/personalInformation';
import ITAccounts from './ProfileContents/ITAccountsAndPassword';


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
      <div className="academics-section-wrap">
        <div className="academics-left-section">
          {sections.map((item) => (
            <div
              key={item}
              className="academic-sec-item"
              onClick={() => selectSection(item)}
            >
              {item}
            </div>
          ))}
        </div>
        {sectionId === 'Sign Up For Alerts' && <infoForAlerts />}
        {sectionId === 'Personal Information' && <studentPersonalInfo />}
        {sectionId === 'IT Accounts and Password' && <ITAccounts />}

      </div>
    </div>
  );
};

export default ProfileMain;
