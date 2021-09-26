import { Meta, Story } from '@storybook/react'

import { Input, InputProps } from '@/components/atoms/Input'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'React Win UI/Atoms/Input',
  component: Input,
  args: {
    placeholder: 'Text',
    value: ''
  }
} as Meta<InputProps>

const darkDecorator = (Component) => (
  <ThemeProvider dark>
    <Component />
  </ThemeProvider>
)
const Template: Story<InputProps> = (args) => <Input {...args} />

export const LightDefault = Template.bind({}) as typeof Template

export const DarkDefault = Template.bind({}) as typeof Template
DarkDefault.decorators = [darkDecorator]
DarkDefault.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
