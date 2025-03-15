import type { Meta, StoryObj } from '@storybook/react';
 
import { WordlibzHeader } from './wordlibzHeader';
 
const meta: Meta<typeof WordlibzHeader> = {
  component: WordlibzHeader,
};
 
export default meta;

type Story = StoryObj<typeof WordlibzHeader>;
 
export const Primary: Story = {
    args: {}
}