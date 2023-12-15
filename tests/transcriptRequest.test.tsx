// TranscriptRequest.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import TranscriptRequest from '../client/src/components/dashboardComponents/AcademicContents/transcriptRequest';

describe('TranscriptRequest Component Tests', () => {
  it('renders without crashing', () => {
    render(<TranscriptRequest />);
  });
});
