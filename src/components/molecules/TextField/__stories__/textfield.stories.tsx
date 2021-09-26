import { Meta, Story } from '@storybook/react'

import { TextField, TextFieldProps } from '@/components/molecules/TextField'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'React Win UI/Molecules/TextField',
  component: TextField,
  args: {
    label: 'Helper text'
  }
} as Meta<TextFieldProps>

const darkDecorator = (Component) => (
  <ThemeProvider dark>
    <Component />
  </ThemeProvider>
)
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const LightDefault = Template.bind({}) as typeof Template

export const DarkDefault = Template.bind({}) as typeof Template
DarkDefault.decorators = [darkDecorator]
DarkDefault.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
