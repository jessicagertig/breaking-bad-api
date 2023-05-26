import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

test('displays default endpoint', () => {
  const char = {name: 'characters', endpoint: 'characters/random', buttonText: 'Fetch Random Characters'}
  render(<Home />)
  expect(screen.getByText(char.endpoint)).toBeInTheDocument()
})
