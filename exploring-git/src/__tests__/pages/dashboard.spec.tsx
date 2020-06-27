import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../pages/dashboard';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Dashboard page', () => {
  it('should be able to find repository', () => {
    const { debug } = render(<Dashboard />);

    debug();
  });
});
