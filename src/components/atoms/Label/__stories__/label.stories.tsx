import { Meta, Story } from '@storybook/react'

import { Label, LabelProps } from '@/components/atoms/Label'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'Label',
  component: Label,
  args: {
    children: 'Helper text'
  }
} as Meta<LabelProps>

const Template: Story<LabelProps> = (args) => <Label {...args} />

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
