import { Meta, StoryObj } from '@storybook/react'

import SearchInput, { SearchInput as SearchInputProps } from './SearchInput'

import '@assets/styles/App.scss'

// Meta information about the story
const meta: Meta<SearchInputProps> = {
  title: 'Inputs/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
