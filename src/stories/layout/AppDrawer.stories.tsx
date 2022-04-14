import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppDrawer from '../../components/layout/AppDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/AppDrawer',
  component: AppDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppDrawer> = (args) => <AppDrawer  {...args} />;

export const Open = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Open.args = {
  open: true,
};

export const Close = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Close.args = {
  open: false,
};
