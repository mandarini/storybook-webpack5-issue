import type { Meta } from '@storybook/react';
import { MyLib } from './my-lib';

const Story: Meta<typeof MyLib> = {
  component: MyLib,
  title: 'MyLib',
};
export default Story;

export const Primary = {
  args: {},
};
