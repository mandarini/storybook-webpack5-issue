import type { Meta } from '@storybook/react';
import { MyLibVite } from './my-lib-vite';

const Story: Meta<typeof MyLibVite> = {
  component: MyLibVite,
  title: 'MyLibVite',
};
export default Story;

export const Primary = {
  args: {},
};
