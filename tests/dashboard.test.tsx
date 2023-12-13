// example.test.tsx
import { render, screen } from '@testing-library/react';
import ExampleComponent from '../path/to/ExampleComponent';

test('renders example component', () => {
  render(<ExampleComponent />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
