import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies hoverable class when hoverable prop is true', () => {
    const { container } = render(<Card hoverable>Hoverable Card</Card>);
    expect(container.querySelector('.hoverable')).toBeInTheDocument();
  });

  it('renders header when provided', () => {
    render(<Card header={<div>Header</div>}>Content</Card>);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    render(<Card footer={<div>Footer</div>}>Content</Card>);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
