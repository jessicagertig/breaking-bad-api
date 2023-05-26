import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

test('correct child component display on click of fetch random', async () => {
  render(<Home />)
  expect(screen.getByText(char.endpoint)).toBeInTheDocument()
  expect(screen.getByText(char.buttonText)).toBeInTheDocument()
  
  await userEvent.click(screen.getByText(char.buttonText))
})
