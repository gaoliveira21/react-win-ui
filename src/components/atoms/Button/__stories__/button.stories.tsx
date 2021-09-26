import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '@/components/atoms/Button'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Text'
  }
} as Meta<ButtonProps>

const darkDecorator = (Component) => (
  <ThemeProvider dark>
    <Component />
  </ThemeProvider>
)
const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const LightPrimary = Template.bind({}) as typeof Template

export const LightSecondary = Template.bind({}) as typeof Template
LightSecondary.args = {
  variant: 'secondary'
}

export const DarkPrimary = Template.bind({}) as typeof Template
DarkPrimary.decorators = [darkDecorator]

DarkPrimary.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const DarkSecondary = Template.bind({}) as typeof Template
DarkSecondary.args = {
  variant: 'secondary'
}

DarkSecondary.decorators = [darkDecorator]

DarkSecondary.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
