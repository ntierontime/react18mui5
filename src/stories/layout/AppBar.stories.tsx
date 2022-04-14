import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppBar from '../../components/layout/AppBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/AppBar',
  component: AppBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Open = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Open.args = {
  open: true,
  title: 'title string',
};

export const Close = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Close.args = {
  open: false,
  title: 'title string',
};
