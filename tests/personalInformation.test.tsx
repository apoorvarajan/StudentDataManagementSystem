// personalInformation.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import PersonalInformation from '../client/src/components/dashboardComponents/ProfileContents/personalInformation';


describe('PersonalInformation Component Tests', () => {
  it('renders name correctly', () => {
    const { getByText } = render(<PersonalInformation />);
    expect(getByText(/Name:/i)).toBeInTheDocument();


  });

  it('renders address correctly', () => {
    const { getByText } = render(<PersonalInformation />);
    expect(getByText(/Address:/i)).toBeInTheDocument();


  });

  it('renders phone number correctly', () => {
    const { getByText } = render(<PersonalInformation />);
    expect(getByText(/Phone:/i)).toBeInTheDocument();

 
  });
});
