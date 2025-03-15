import type { Meta, StoryObj } from '@storybook/react';
 
// import { UserWordListEditor } from './UserWordListEditor'
// import { mockUserWords } from './__mock__/mockUserWords';
import { WordlibzHeader } from './wordlibzHeader';
 
const meta: Meta<typeof WordlibzHeader> = {
  component: WordlibzHeader,
};
 
export default meta;

type Story = StoryObj<typeof WordlibzHeader>;
 
export const Primary: Story = {
    args: {}
}