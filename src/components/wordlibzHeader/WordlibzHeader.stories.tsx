import type { Meta, StoryObj } from "@storybook/react";

import { WordlibzHeader } from "./WordlibzHeader";

const meta: Meta<typeof WordlibzHeader> = {
  component: WordlibzHeader,
  title: "COMPONENTS/WordlibzHeader",
};

export default meta;

type Story = StoryObj<typeof WordlibzHeader>;

export const Primary: Story = {
  args: {
    handleClear: () => {
      alert("CLEAR!");
    },
    handleNew: () => {
      alert("NEW!");
    },
  },
};
