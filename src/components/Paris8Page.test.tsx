import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Paris8Page from './Paris8Page';

describe('Paris8Page', () => {
  it('renders heading', () => {
    render(<Paris8Page onBack={() => {}} onNavigateHome={() => {}} />);
    expect(screen.getByText(/Location photobooth Paris 8/i)).toBeInTheDocument();
  });
});
