import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../dashboard';

describe('Dashboard page', () => {
  it('should be able to find repository', () => {
    const { debug } = render(<Dashboard />);

    debug();
  });
});
