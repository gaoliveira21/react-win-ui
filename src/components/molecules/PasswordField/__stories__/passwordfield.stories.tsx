import { Meta, Story } from '@storybook/react'

import {
  PasswordField,
  PasswordFieldProps
} from '@/components/molecules/PasswordField'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'React Win UI/Molecules/PasswordField',
  component: PasswordField,
  args: {
    label: 'Helper text'
  }
} as Meta<PasswordFieldProps>

const darkDecorator = (Component) => (
  <ThemeProvider dark>
    <Component />
  </ThemeProvider>
)
const Template: Story<PasswordFieldProps> = (args) => (
  <PasswordField {...args} />
)

export const LightDefault = Template.bind({}) as typeof Template

export const DarkDefault = Template.bind({}) as typeof Template
DarkDefault.decorators = [darkDecorator]
DarkDefault.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
