import { screen, waitFor } from '@testing-library/react';
import Character from '@/components/character';
import { renderWithRedux } from '../../test-utils/testRedux';

test("Character component renders with initial loading state and then loaded state", async () => {
  renderWithRedux(<Character />);
  expect(screen.getByText('Loading Character...')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Character')).toBeInTheDocument();
  });
});