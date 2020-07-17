import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

/**
 *  Links do routing inside the app from app react-router-dom
 *  mocked
 */

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

/**
 *  Test get input filled and button submited
 *  and verify if Repository exists
 */

describe('Dashboard Page', () => {
  it('should be able to add repo', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Dashboard />,
    );

    const repoElement = getByTestId('repoAdd');
    const inputField = getByPlaceholderText('<User name> / <Repository name>');
    const buttonElement = getByText('Search');

    fireEvent.change(inputField, { target: { value: 'facebook/react' } });

    fireEvent.click(buttonElement);

    expect(repoElement).toBeTruthy();
  });
});
