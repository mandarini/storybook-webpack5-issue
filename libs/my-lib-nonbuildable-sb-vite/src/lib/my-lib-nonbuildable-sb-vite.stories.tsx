import type { Meta } from '@storybook/react';
import { MyLibNonbuildableSbVite } from './my-lib-nonbuildable-sb-vite';

const Story: Meta<typeof MyLibNonbuildableSbVite> = {
  component: MyLibNonbuildableSbVite,
  title: 'MyLibNonbuildableSbVite',
};
export default Story;

export const Primary = {
  args: {},
};
