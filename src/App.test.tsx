import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders home page heading', () => {
    render(<App />);
    expect(screen.getByText(/L'expérience/i)).toBeInTheDocument();
  });
});
