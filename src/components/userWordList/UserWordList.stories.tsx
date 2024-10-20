import type { Meta, StoryObj } from '@storybook/react';
 
import { UserWordList } from './UserWordList'
import { mockUserWords } from './__mock__/mockUserWords';
import { IndexedAndLabeledPOSItem } from '@/types/indexedAndLabeledPOSItem';
 
const meta: Meta<typeof UserWordList> = {
  component: UserWordList,
};
 
export default meta;

type Story = StoryObj<typeof UserWordList>;
 
export const Primary: Story = {
  args: { wordList: mockUserWords as Array<IndexedAndLabeledPOSItem> },
}