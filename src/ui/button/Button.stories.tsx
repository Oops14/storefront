import { Meta, StoryObj } from '@storybook/react'

import Button, { Button as ButtonProps } from './Button'

import '@assets/styles/App.scss'

// Meta information about the story
const meta: Meta<ButtonProps> = {
  title: 'Buttons/BaseButton',
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    className: 'btn',
  },
}

export const Hovered: Story = {
  args: {
    children: 'Button',
    className: 'btn active',
  },
}
