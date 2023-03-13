import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button Primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button Secondary'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button Large'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button Small'
  }
};
