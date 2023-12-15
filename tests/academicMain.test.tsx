// academicMain.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AcademicMain from '../client/src/components/dashboardComponents/AcademicMain';


describe('AcademicMain Component Tests', () => {
  it('renders without crashing', () => {
    render(<AcademicMain />);
  });

  it('displays the default section heading', () => {
    render(<AcademicMain />);
    const defaultHeading = screen.getByText('Academic Summary');
    expect(defaultHeading).toBeInTheDocument();
  });

  it('updates the section heading based on hash change', () => {
    window.location.hash = '#grades';
    render(<AcademicMain />);
    const gradesHeading = screen.getByText('Grades');
    expect(gradesHeading).toBeInTheDocument();
  });

  it('renders AcademicSummary component by default', () => {
    render(<AcademicMain />);
    const academicSummary = screen.getByTestId('academic-summary');
    expect(academicSummary).toBeInTheDocument();
  });

  it('renders AcademicGrades component when hash is #grades', () => {
    window.location.hash = '#grades';
    render(<AcademicMain />);
    const academicGrades = screen.getByTestId('academic-grades');
    expect(academicGrades).toBeInTheDocument();
  });

  // Add similar test cases for other academic sections (e.g., Course History, Transcript Request, Graduation)
});
