import { UserInputPOS } from "@/types/userInputPOS";

/**
 * insert object in array function for setState calls.
 */
export function insertWordListItemReducer(
  wordList: Array<UserInputPOS>,
  newWordValue: string,
  newWordIndex: number,
) {
  return wordList.map((wordItem: UserInputPOS, index: number) => {
    if (index === newWordIndex) {
      return {
        ...wordItem,
        value: newWordValue,
      };
    } else {
      return wordItem;
    }
  });
}
