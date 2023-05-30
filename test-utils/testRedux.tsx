import React from 'react';
import { render } from '@testing-library/react';
import { Store, makeStore } from '@/lib/redux/store';
import { Provider } from 'react-redux';

interface RenderWithReduxOptions {
  store?: Store;
}

function renderWithRedux(
  ui: React.ReactElement,
  { store }: RenderWithReduxOptions = {}
) {
  if (!store) {
    store = makeStore();
  }

  return {
    ...render(<Provider store={store} >{ui}</Provider>),
    store,
  };
}

export { renderWithRedux }