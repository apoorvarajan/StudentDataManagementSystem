// BrowseCourses.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import BrowseCourses from '../client/src/components/dashboardComponents/CpaContents/browseCourses';

describe('BrowseCourses Component Tests', () => {
  it('renders without crashing', () => {
    render(<BrowseCourses />);
  });
});

