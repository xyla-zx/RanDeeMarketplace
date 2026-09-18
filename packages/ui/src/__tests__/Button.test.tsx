import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant classes correctly', () => {
    const { container: primary } = render(<Button variant="primary">Primary</Button>);
    expect(primary.querySelector('button')).toHaveClass('bg-primary');

    const { container: secondary } = render(<Button variant="secondary">Secondary</Button>);
    expect(secondary.querySelector('button')).toHaveClass('bg-secondary');

    const { container: outline } = render(<Button variant="outline">Outline</Button>);
    expect(outline.querySelector('button')).toHaveClass('border-primary');
  });

  it('applies size classes correctly', () => {
    const { container: sm } = render(<Button size="sm">Small</Button>);
    expect(sm.querySelector('button')).toHaveClass('px-3', 'py-1.5', 'text-sm');

    const { container: lg } = render(<Button size="lg">Large</Button>);
    expect(lg.querySelector('button')).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    screen.getByRole('button').click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies isLoading state correctly', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
