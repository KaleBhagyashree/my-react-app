import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders React CI/CD Demo App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/React CI\/CD Demo App/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders counter component', () => {
  render(<App />);
  const counterElement = screen.getByText(/Counter:/i);
  expect(counterElement).toBeInTheDocument();
});

test('renders description text', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/This is a simple React app with CI\/CD pipeline/i);
  expect(descriptionElement).toBeInTheDocument();
});