import type { Meta } from '@storybook/react';
import { MyLibNonbuildable } from './my-lib-nonbuildable';

const Story: Meta<typeof MyLibNonbuildable> = {
  component: MyLibNonbuildable,
  title: 'MyLibNonbuildable',
};
export default Story;

export const Primary = {
  args: {},
};
