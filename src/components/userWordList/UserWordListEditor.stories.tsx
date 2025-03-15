import type { Meta, StoryObj } from '@storybook/react';
 
import { UserWordListEditor } from './UserWordListEditor'
import { mockUserWords } from './__mock__/mockUserWords';
import { IndexedAndLabeledPOSItem } from '@/types/indexedAndLabeledPOSItem';
 
const meta: Meta<typeof UserWordListEditor> = {
  component: UserWordListEditor,
};
 
export default meta;

type Story = StoryObj<typeof UserWordListEditor>;
 
export const Primary: Story = {
  args: { wordList: mockUserWords as Array<IndexedAndLabeledPOSItem> },
}