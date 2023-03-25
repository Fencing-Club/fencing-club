import type { Meta, StoryObj } from "@storybook/react"

import { ParticipantCard } from "./ParticipantCard"

const meta: Meta<typeof ParticipantCard> = {
  title: "Components/ParticipantCard",
  component: ParticipantCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ParticipantCard>

export const Example: Story = {
  args: {},
}
