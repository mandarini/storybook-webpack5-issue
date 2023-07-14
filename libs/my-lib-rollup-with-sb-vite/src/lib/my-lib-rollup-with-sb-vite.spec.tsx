import { render } from '@testing-library/react';

import MyLibRollupWithSbVite from './my-lib-rollup-with-sb-vite';

describe('MyLibRollupWithSbVite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLibRollupWithSbVite />);
    expect(baseElement).toBeTruthy();
  });
});
