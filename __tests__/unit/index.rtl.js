import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

test('change from default endpoint on click', async () => {
  const char = {name: 'Characters', endpoint: 'characters/random', buttonText: 'Fetch Random Character'}
  const episode = {name: 'Episodes', endpoint: 'episodes/random', buttonText: 'Fetch Random Episode'}
  render(<Home />)
  expect(screen.getByText(char.endpoint)).toBeInTheDocument()
  expect(screen.getByText(char.buttonText)).toBeInTheDocument()
  expect(screen.queryByText(episode.endpoint)).not.toBeInTheDocument()
  expect(screen.queryByText(episode.buttonText)).not.toBeInTheDocument()
  
  await userEvent.click(screen.getByText(episode.name))

  expect(screen.getByText(episode.endpoint)).toBeInTheDocument()
  expect(screen.getByText(episode.buttonText)).toBeInTheDocument()
  expect(screen.queryByText(char.endpoint)).not.toBeInTheDocument()
  expect(screen.queryByText(char.buttonText)).not.toBeInTheDocument()
})
