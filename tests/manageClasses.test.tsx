// manageClasses.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import ManageClasses from '../client/src/components/dashboardComponents/ManageClasses';

describe('ManageClasses Component Tests', () => {
  it('renders without crashing', () => {
    render(<ManageClasses />);
  });

  it('renders the header text', () => {
    const { container } = render(<ManageClasses />);
    expect(container.querySelector('.home-heading-text')).toBeTruthy();
  });

  it('renders academic sections', () => {
    const { container } = render(<ManageClasses />);
    expect(container.querySelector('.academic-sec-item')).toBeTruthy();
  });

  it('renders class details', () => {
    const { container } = render(<ManageClasses />);
    expect(container.querySelector('.myclass-wrap')).toBeTruthy();
    expect(container.querySelector('.myclass-classtitle')).toBeTruthy();
    expect(container.querySelector('.myclass-class-details')).toBeTruthy();
  });

  // Add more test cases as needed to cover other parts of the component
});
