import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText('React CI/CD Demo App');
  expect(headerElement).toBeInTheDocument();
});

test('header is wrapped in h1 tag', () => {
  render(<Header />);
  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(h1Element).toBeInTheDocument();
});