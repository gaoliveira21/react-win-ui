import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '@/components/atoms/Button'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Text'
  }
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({}) as typeof Template

export const Secondary = Template.bind({}) as typeof Template
Secondary.args = {
  variant: 'secondary'
}
