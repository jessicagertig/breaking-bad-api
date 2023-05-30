import { screen } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

import { renderWithRedux } from '../../test-utils/testRedux';

//mock the window scrollTo function
window.scrollTo = jest.fn();

test("Character component displays with data on click of 'Fetch Random Character'", async () => {
  renderWithRedux(<Home />)
  // should default to characters endpoint
  // verify the 'button' exists
  expect(screen.getByText('Fetch Random Character')).toBeInTheDocument();
  
  await userEvent.click(screen.getByText('Fetch Random Character'))
  // check for test data - will always be the first object in the characters.json file
  // this can be changed in the test-utils/testDb.tsx file
  expect(screen.getByText('Character')).toBeInTheDocument();
  expect(screen.getByText('character_id')).toBeInTheDocument();
  expect(screen.getByText(/Walter White/)).toBeInTheDocument();
});

// TODO: change mock api to allow testing of 'refetch' functionality
// and add test

test("Episode component displays with data on click of 'Fetch Random Episode'", async () => {
  renderWithRedux(<Home />);
  // select the Episodes endpoint
  await userEvent.click(screen.getByText('Episodes'));
  // verify the change before continuing
  expect(screen.getByText('Fetch Random Episode')).toBeInTheDocument();
  // trigger Fetch Random Episode 
  await userEvent.click(screen.getByText('Fetch Random Episode'));
  //c heck for test data - will always be the first object in the episodes.json file
  // this can be changed in the test-utils/testDb.tsx file
  expect(screen.getByText('Episode')).toBeInTheDocument();
  expect(screen.getByText('episode_id')).toBeInTheDocument();
  expect(screen.getByText(/Walter White/)).toBeInTheDocument();
});