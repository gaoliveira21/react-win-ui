import { Meta, Story } from '@storybook/react/types-6-0'

import { Text } from '@/components/atoms/Text'

export default {
  title: 'Text',
  component: Text
} as Meta

export const Default: Story = (args) => (
  <Text {...args}>Basic Text Component</Text>
)
