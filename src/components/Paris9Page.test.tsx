import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Paris9Page from './Paris9Page';

describe('Paris9Page', () => {
  it('renders heading', () => {
    render(<Paris9Page onBack={() => {}} onNavigateHome={() => {}} />);
    expect(screen.getByText(/Location photobooth Paris 9/i)).toBeInTheDocument();
  });
});
