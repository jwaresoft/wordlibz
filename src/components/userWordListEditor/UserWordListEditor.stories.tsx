import type { Meta, StoryObj } from '@storybook/react';
import { insertWordListItemReducer } from '../../lib/reducers/insertWordListItemReducer';
import { resetUserValues } from '@/lib/pos';
import { UserWordListEditor } from './UserWordListEditor'
import { mockUserWords } from './__mock__/mockUserWords';
import { useState } from 'react';
 
const meta: Meta<typeof UserWordListEditor> = {
  component: UserWordListEditor,
};
 
export default meta;

type Story = StoryObj<typeof UserWordListEditor>;
 
/**
 * wrapper for demo / testing as these values will come from the store 
 * */ 
function UserWordListWrapper() {
  // prop wordList
  const [userList, setUserList ] = useState(resetUserValues(mockUserWords))
  // prop handleIndexChange
  function updateUserList(word: string, index: number) {
    setUserList(oldList => insertWordListItemReducer(oldList, word, index))
  }
  // prop submitUserWords
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
  render: () => <UserWordListWrapper/>
}