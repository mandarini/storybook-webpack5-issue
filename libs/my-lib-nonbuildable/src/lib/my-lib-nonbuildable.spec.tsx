import { render } from '@testing-library/react';

import MyLibNonbuildable from './my-lib-nonbuildable';

describe('MyLibNonbuildable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLibNonbuildable />);
    expect(baseElement).toBeTruthy();
  });
});
