import { Meta, Story } from '@storybook/react'

import { Label } from '@/components/atoms/Label'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'Label',
  component: Label
} as Meta

const Template: Story = (args) => <Label {...args} />

export const LightDefault = Template.bind({}) as typeof Template

export const DarkDefault = Template.bind({}) as typeof Template
DarkDefault.decorators = [
  (Component) => (
    <ThemeProvider dark>
      <Component />
    </ThemeProvider>
  )
]

DarkDefault.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
