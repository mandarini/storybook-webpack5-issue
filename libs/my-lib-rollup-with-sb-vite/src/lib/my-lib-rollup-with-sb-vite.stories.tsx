import type { Meta } from '@storybook/react';
import { MyLibRollupWithSbVite } from './my-lib-rollup-with-sb-vite';

const Story: Meta<typeof MyLibRollupWithSbVite> = {
  component: MyLibRollupWithSbVite,
  title: 'MyLibRollupWithSbVite',
};
export default Story;

export const Primary = {
  args: {},
};
