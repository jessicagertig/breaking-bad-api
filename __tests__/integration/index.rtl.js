import { screen } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '../../test-utils/testRedux';

window.scrollTo = jest.fn();

test('character component displays on click of fetch random character', async () => {
  renderWithRedux(<Home />)
  expect(screen.getByText('characters/random')).toBeInTheDocument()
  expect(screen.getByText('Fetch Random Character')).toBeInTheDocument()
  
  await userEvent.click(screen.getByText('Fetch Random Character'))

  expect(screen.getByText('Character')).toBeInTheDocument()
  expect(screen.getByText('character_id')).toBeInTheDocument()
  expect(screen.getByText(/Walter White/)).toBeInTheDocument()
})

test('episode component displays on click of fetch random episode', async () => {
  renderWithRedux(<Home />)
  await userEvent.click(screen.getByText('Episodes'))
  expect(screen.getByText('episodes/random')).toBeInTheDocument()
  expect(screen.getByText('Fetch Random Episode')).toBeInTheDocument()
  
  await userEvent.click(screen.getByText('Fetch Random Episode'))

  expect(screen.getByText('Episode')).toBeInTheDocument()
  expect(screen.getByText('episode_id')).toBeInTheDocument()
  expect(screen.getByText(/Walter White/)).toBeInTheDocument()
})

// test('character data displays on click of fetch random character', async () => {
//   remderWithRedux(<Home />)
// })
