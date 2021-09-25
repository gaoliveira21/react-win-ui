import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '@/components/atoms/Button'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Text'
  }
} as Meta<ButtonProps>

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />
