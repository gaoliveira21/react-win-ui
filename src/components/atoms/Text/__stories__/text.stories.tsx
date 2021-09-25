import { Meta, Story } from '@storybook/react/types-6-0'

import { Text, TextProps } from '@/components/atoms/Text'

export default {
  title: 'Text',
  component: Text
} as Meta<TextProps>

const Template: Story<TextProps> = (args) => <Text {...args}></Text>

export const Caption = Template.bind({}) as typeof Template
Caption.args = {
  variant: 'caption',
  children: 'Caption variant'
}

export const Body = Template.bind({}) as typeof Template
Body.args = {
  variant: 'body',
  children: 'Body variant'
}

export const BodyStrong = Template.bind({}) as typeof Template
BodyStrong.args = {
  variant: 'body_strong',
  children: 'Body Strong variant'
}

export const BodyLarge = Template.bind({}) as typeof Template
BodyLarge.args = {
  variant: 'body_large',
  children: 'Body Large variant'
}
