import { screen } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '@/utils/testUtils'

test('character component displays on click of fetch random character', async () => {
  renderWithRedux(<Home />)
  expect(screen.getByText('characters/random')).toBeInTheDocument()
  expect(screen.getByText('Fetch Random Character')).toBeInTheDocument()
  
  await userEvent.click(screen.getByText('Fetch Random Character'))

  expect(screen.getByText('Character')).toBeInTheDocument()
})

test('episode component displays on click of fetch random episode', async () => {
  renderWithRedux(<Home />)
  await userEvent.click(screen.getByText('Episodes'))
  expect(screen.getByText('episodes/random')).toBeInTheDocument()
  expect(screen.getByText('Fetch Random Episode')).toBeInTheDocument()
  
  await userEvent.click(screen.getByText('Fetch Random Episode'))

  expect(screen.getByText('Episode')).toBeInTheDocument()
})

