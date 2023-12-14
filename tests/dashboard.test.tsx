import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../front-end/src/components/Dashboard';

test('renders dashboard with greeting and sections', () => {
  // Render the Dashboard component
  render(<Dashboard />);

  // Check if the greeting is rendered
  const greetingElement = screen.getByText(/Good (Morning|Afternoon|Evening) \[Student Name\]!/i);
  expect(greetingElement).toBeInTheDocument();

  // Check if the date is rendered
  const dateElement = screen.getByText(/Today is/i);
  expect(dateElement).toBeInTheDocument();

  // Check if each dashboard section is rendered
  const sections = ['Profile', 'Academics', 'Course Planning Assistant'];
  sections.forEach((section) => {
    const sectionElement = screen.getByText(section);
    expect(sectionElement).toBeInTheDocument();
  });
});

// You can add more specific tests based on your component's functionality
// For example, testing dynamic content or interactions


//redirection from dashboard to all the links.
//profile - when button is clicked, the specific UI appears