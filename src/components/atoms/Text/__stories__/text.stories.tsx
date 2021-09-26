import { Meta, Story } from '@storybook/react/types-6-0'

import { Text, TextProps } from '@/components/atoms/Text'
import { ThemeProvider } from '@/theme/provider'

export default {
  title: 'React Win UI/Atoms/Text',
  component: Text
} as Meta<TextProps>

const darkDecorator = (Component) => (
  <ThemeProvider dark>
    <Component />
  </ThemeProvider>
)
const Template: Story<TextProps> = (args) => <Text {...args}></Text>

export const LightCaption = Template.bind({}) as typeof Template
LightCaption.args = {
  variant: 'caption',
  children: 'Light Caption variant'
}

export const DarkCaption = Template.bind({}) as typeof Template
DarkCaption.args = {
  variant: 'caption',
  children: 'Dark Caption variant'
}
DarkCaption.decorators = [darkDecorator]
DarkCaption.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightBody = Template.bind({}) as typeof Template
LightBody.args = {
  variant: 'body',
  children: 'Light Body variant'
}

export const DarkBody = Template.bind({}) as typeof Template
DarkBody.args = {
  variant: 'body',
  children: 'Dark Body variant'
}
DarkBody.decorators = [darkDecorator]
DarkBody.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightBodyStrong = Template.bind({}) as typeof Template
LightBodyStrong.args = {
  variant: 'body_strong',
  children: 'Light Body Strong variant'
}

export const DarkBodyStrong = Template.bind({}) as typeof Template
DarkBodyStrong.args = {
  variant: 'body_strong',
  children: 'Dark Body Strong variant'
}
DarkBodyStrong.decorators = [darkDecorator]
DarkBodyStrong.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightBodyLarge = Template.bind({}) as typeof Template
LightBodyLarge.args = {
  variant: 'body_large',
  children: 'Light Body Large variant'
}

export const DarkBodyLarge = Template.bind({}) as typeof Template
DarkBodyLarge.args = {
  variant: 'body_large',
  children: 'Dark Body Large variant'
}
DarkBodyLarge.decorators = [darkDecorator]
DarkBodyLarge.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
