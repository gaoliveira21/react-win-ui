import { Meta, Story } from '@storybook/react'

import { Heading, HeadingProps } from '@/components/atoms/Heading'

export default {
  title: 'Heading',
  component: Heading
} as Meta<HeadingProps>

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Subtitle = Template.bind({}) as typeof Template
Subtitle.args = {
  variant: 'subtitle',
  children: 'Subtitle variant'
}

export const Title = Template.bind({}) as typeof Template
Title.args = {
  variant: 'title',
  children: 'Title variant'
}

export const TitleLarge = Template.bind({}) as typeof Template
TitleLarge.args = {
  variant: 'title_large',
  children: 'Title Large variant'
}

export const Display = Template.bind({}) as typeof Template
Display.args = {
  variant: 'display',
  children: 'Display variant'
}
