import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

//define expected text for use in tests
const char = {name: 'Characters', endpoint: 'characters/random', buttonText: 'Fetch Random Character'}
const episode = {name: 'Episodes', endpoint: 'episodes/random', buttonText: 'Fetch Random Episode'}

test("'Home' component renders with expected default of 'characters' selected", async () => {
  render(<Home />);
  //verify only characters displayed
  expect(screen.getByText(char.endpoint)).toBeInTheDocument();
  expect(screen.getByText(char.buttonText)).toBeInTheDocument();
  expect(screen.queryByText(episode.endpoint)).not.toBeInTheDocument();
  expect(screen.queryByText(episode.buttonText)).not.toBeInTheDocument();
});

test("Default endpoint 'characters' changes to selected endpoint 'episodes' on click", async () => {
  render(<Home />);
  //click on episodes 'button'
  await userEvent.click(screen.getByText(episode.name));
  //verify the chanage from characters to episodes
  expect(screen.getByText(episode.endpoint)).toBeInTheDocument();
  expect(screen.getByText(episode.buttonText)).toBeInTheDocument();
  expect(screen.queryByText(char.endpoint)).not.toBeInTheDocument();
  expect(screen.queryByText(char.buttonText)).not.toBeInTheDocument();
});
