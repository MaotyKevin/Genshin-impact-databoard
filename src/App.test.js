import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Maoty impact link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Maoty impact/i);
  expect(linkElement).toBeInTheDocument();
});
