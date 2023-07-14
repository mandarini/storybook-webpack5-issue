import { render } from '@testing-library/react';

import MyLibVite from './my-lib-vite';

describe('MyLibVite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLibVite />);
    expect(baseElement).toBeTruthy();
  });
});
