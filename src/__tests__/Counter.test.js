import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter with initial value of 0', () => {
  render(<Counter />);
  const counterElement = screen.getByText('Counter: 0');
  expect(counterElement).toBeInTheDocument();
});

test('increments counter when + button is clicked', () => {
  render(<Counter />);
  const incrementBtn = screen.getByTestId('increment-btn');
  fireEvent.click(incrementBtn);
  const counterElement = screen.getByText('Counter: 1');
  expect(counterElement).toBeInTheDocument();
});

test('decrements counter when - button is clicked', () => {
  render(<Counter />);
  const decrementBtn = screen.getByTestId('decrement-btn');
  fireEvent.click(decrementBtn);
  const counterElement = screen.getByText('Counter: -1');
  expect(counterElement).toBeInTheDocument();
});

test('resets counter when reset button is clicked', () => {
  render(<Counter />);
  const incrementBtn = screen.getByTestId('increment-btn');
  const resetBtn = screen.getByTestId('reset-btn');
  
  // Increment counter first
  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);
  
  // Then reset
  fireEvent.click(resetBtn);
  
  const counterElement = screen.getByText('Counter: 0');
  expect(counterElement).toBeInTheDocument();
});