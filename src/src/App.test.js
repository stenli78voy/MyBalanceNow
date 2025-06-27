import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const headerElement = screen.getByText(/MyBalanceNow/i);
  expect(headerElement).toBeInTheDocument();
});
