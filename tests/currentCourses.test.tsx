// CurrentCourses.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import CurrentCourses from '../client/src/components/dashboardComponents/CpaContents/currentCourses';

describe('CurrentCourses Component Tests', () => {
  it('renders without crashing', () => {
    render(<CurrentCourses />);
  });
});
