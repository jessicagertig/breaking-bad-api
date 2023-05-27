import React from 'react';
import { render } from '@testing-library/react';
import { wrapper, Store, makeStore } from '@/lib/redux/store';
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

// function renderWithRedux(ui: React.ReactNode) {
//   // Temporary component to render the given UI with the wrapper
//   const WrappedComponent = () => <>{ui}</>;
//   const WrappedWithRedux = wrapper.withRedux(WrappedComponent);

//   // Render the wrapped component and return the result
//   return render(<WrappedWithRedux />);
// }

export { renderWithRedux }