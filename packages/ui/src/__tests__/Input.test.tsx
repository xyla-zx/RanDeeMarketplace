import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { container: sm } = render(<Input size="sm" />);
    expect(sm.querySelector('input')).toHaveClass('px-3', 'py-1.5', 'text-sm');

    const { container: lg } = render(<Input size="lg" />);
    expect(lg.querySelector('input')).toHaveClass('px-4', 'py-2', 'text-base');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('displays error state correctly', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders label correctly', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    screen.getByRole('textbox').value = 'test';
    expect(handleChange).toHaveBeenCalled();
  });
});
