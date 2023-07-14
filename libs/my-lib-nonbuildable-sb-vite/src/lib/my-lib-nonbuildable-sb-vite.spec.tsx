import { render } from '@testing-library/react';

import MyLibNonbuildableSbVite from './my-lib-nonbuildable-sb-vite';

describe('MyLibNonbuildableSbVite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLibNonbuildableSbVite />);
    expect(baseElement).toBeTruthy();
  });
});
