import { Meta, Story } from '@storybook/react/types-6-0'

import { Button } from './button'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Basic: Story = (args) => <Button {...args}>Button</Button>
