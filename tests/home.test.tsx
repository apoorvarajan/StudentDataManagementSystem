// home.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HomeComponent from '../client/src/components/Home';

describe('HomeComponent Tests', () => {
  it('renders without crashing', () => {
    render(<HomeComponent />);
  });

  it('displays the correct title', () => {
    const { getByText } = render(<HomeComponent />);
    expect(getByText('EduConnectHub')).toBeInTheDocument();
  });

  it('displays the welcome message', () => {
    const { getByText } = render(<HomeComponent />);
    expect(getByText('WELCOME TO THE EduConnectHub: Your Academic Success Center')).toBeInTheDocument();
  });

  it('displays the login buttons', () => {
    const { getByText } = render(<HomeComponent />);
    expect(getByText('Login as:')).toBeInTheDocument();
    expect(getByText('Student')).toBeInTheDocument();
    expect(getByText('Faculty')).toBeInTheDocument();
    expect(getByText('Admin')).toBeInTheDocument();
  });

  it('opens the login modal when a button is clicked', () => {
    const { getByText, queryByText } = render(<HomeComponent />);
    
    // Initially, the modal is not present
    expect(queryByText('Login Modal Content')).toBeNull();

    // Click on the Student login button
    fireEvent.click(getByText('Student'));

    // Now, the modal content should be present
    expect(queryByText('Login Modal Content')).toBeInTheDocument();
  });

  it('closes the login modal when a button is clicked', () => {
    const { getByText, queryByText } = render(<HomeComponent />);
    
    // Initially, the modal is not present
    expect(queryByText('Login Modal Content')).toBeNull();

    // Click on the Student login button to open the modal
    fireEvent.click(getByText('Student'));

    // Now, the modal content should be present
    expect(queryByText('Login Modal Content')).toBeInTheDocument();

    // Click on the close button in the modal
    fireEvent.click(getByText('Close'));

    // Now, the modal content should be closed
    expect(queryByText('Login Modal Content')).toBeNull();
  });
});
