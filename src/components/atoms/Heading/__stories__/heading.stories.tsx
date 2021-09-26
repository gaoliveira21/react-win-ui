import { Meta, Story } from '@storybook/react'

import { Heading, HeadingProps } from '@/components/atoms/Heading'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'React Win UI/Atoms/Heading',
  component: Heading
} as Meta<HeadingProps>

const darkDecorator = (Component) => (
  <ThemeProvider dark>
    <Component />
  </ThemeProvider>
)
const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const LightSubtitle = Template.bind({}) as typeof Template
LightSubtitle.args = {
  variant: 'subtitle',
  children: 'Light Subtitle variant'
}
export const DarkSubtitle = Template.bind({}) as typeof Template
DarkSubtitle.args = {
  variant: 'subtitle',
  children: 'Dark Subtitle variant'
}
DarkSubtitle.decorators = [darkDecorator]
DarkSubtitle.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightTitle = Template.bind({}) as typeof Template
LightTitle.args = {
  variant: 'title',
  children: 'Light Title variant'
}
export const DarkTitle = Template.bind({}) as typeof Template
DarkTitle.args = {
  variant: 'title',
  children: 'Dark Title variant'
}
DarkTitle.decorators = [darkDecorator]
DarkTitle.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightTitleLarge = Template.bind({}) as typeof Template
LightTitleLarge.args = {
  variant: 'title_large',
  children: 'Light Title Large variant'
}

export const DarkTitleLarge = Template.bind({}) as typeof Template
DarkTitleLarge.args = {
  variant: 'title_large',
  children: 'Dark Title Large variant'
}
DarkTitleLarge.decorators = [darkDecorator]
DarkTitleLarge.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightDisplay = Template.bind({}) as typeof Template
LightDisplay.args = {
  variant: 'display',
  children: 'Light Display variant'
}

export const DarkDisplay = Template.bind({}) as typeof Template
DarkDisplay.args = {
  variant: 'display',
  children: 'Dark Display variant'
}
DarkDisplay.decorators = [darkDecorator]
DarkDisplay.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
