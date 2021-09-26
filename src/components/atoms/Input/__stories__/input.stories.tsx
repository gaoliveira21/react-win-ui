import { Meta, Story } from '@storybook/react'

import { Input, InputProps } from '@/components/atoms/Input'

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Text',
    value: ''
  }
} as Meta<InputProps>

export const Default: Story<InputProps> = (args) => <Input {...args} />
