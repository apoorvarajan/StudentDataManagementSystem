// Graduation.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Graduation from '../client/src/components/dashboardComponents/AcademicContents/graduation';
describe('Graduation Component Tests', () => {
  it('renders without crashing', () => {
    render(<Graduation />);
  });
});
