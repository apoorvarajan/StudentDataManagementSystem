// sideBar.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideBar from '../client/src/components/sideBar';

describe('SideBar Component Tests', () => {
  it('renders without crashing', () => {
    render(<SideBar />);
  });

  it('displays dashboard sections', () => {
    const { getByText } = render(<SideBar />);
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('Academics')).toBeInTheDocument();
    expect(getByText('Course Planning Assistant')).toBeInTheDocument();
  });

  it('navigates to the main URL when a dashboard section is clicked', () => {
    const { getByText } = render(<SideBar />);
    const profileSection = getByText('Profile');

    fireEvent.click(profileSection);

    // Assuming the main URL is '/profile#alert', adjust this assertion based on your actual URL
    expect(window.location.href).toBe('/profile#alert');
  });

  it('navigates to the subitem URL when a subitem is clicked', () => {
    const { getByText } = render(<SideBar />);
    const signUpForAlerts = getByText('Sign Up For Alerts');

    fireEvent.click(signUpForAlerts);

    // Assuming the subitem URL is '/profile#alert', adjust this assertion based on your actual URL
    expect(window.location.href).toBe('/profile#alert');
  });

  // Add more test cases as needed for other interactions and scenarios.
});
