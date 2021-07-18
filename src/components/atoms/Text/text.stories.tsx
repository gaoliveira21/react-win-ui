import { Meta, Story } from '@storybook/react/types-6-0'

import { Text } from './text'

export default {
  title: 'Text',
  component: Text
} as Meta

export const Basic: Story = (args) => (
  <Text {...args}>Basic Text Component</Text>
)
