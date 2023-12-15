// CheckReq.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import CheckReq from '../client/src/components/dashboardComponents/CpaContents/checkReq';

describe('CheckReq Component Tests', () => {
  it('renders without crashing', () => {
    render(<CheckReq />);
  });
});
