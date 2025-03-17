import type { Meta, StoryObj } from '@storybook/react';
import { insertWordListItem } from './userWorldListEditorHelpers';
import { resetUserValues } from '@/lib/pos';
import { UserWordListEditor } from './UserWordListEditor'
import { mockUserWords } from './__mock__/mockUserWords';
import { IndexedAndLabeledPOSItem } from '@/types/indexedAndLabeledPOSItem';
import { useState } from 'react';
 
const meta: Meta<typeof UserWordListEditor> = {
  component: UserWordListEditor,
};
 
export default meta;

type Story = StoryObj<typeof UserWordListEditor>;
 
// wrapper for demo / testing as these values will come from the store
function UserWordListWrapper() {
  // prop wordList
  const [userList, setUserList ] = useState(resetUserValues(mockUserWords))
  
  function updateUserList(word: string, index: number) {
    setUserList(oldList => insertWordListItem(oldList, word, index))
  }

  function submit() {
    alert(JSON.stringify(userList, undefined, 2))
  }

  return <UserWordListEditor 
    wordList={userList}
    handleIndexChange={updateUserList}
    submitUserWords={submit}
  />
}

export const Primary: Story = {
  // args: { wordList: mockUserWords as Array<IndexedAndLabeledPOSItem> },
  render: () => <UserWordListWrapper/>
}