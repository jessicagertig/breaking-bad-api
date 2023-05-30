import { screen, waitFor } from '@testing-library/react';
import Episode from '@/components/episode';
import { renderWithRedux } from '../../test-utils/testRedux';

test("Episode component renders with initial loading state and then loaded state", async () => {
  renderWithRedux(<Episode />);
  expect(screen.getByText('Loading Episode...')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Episode')).toBeInTheDocument();
  });
});