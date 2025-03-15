import { useState } from "react";
import { IndexedAndLabeledPOSItem } from "@/types/indexedAndLabeledPOSItem";
import "./userWordListEditor.css";
import { resetUserValues } from "@/lib/pos";
import { insertWordListItem } from "./userWorldListEditorHelpers";

/**
 *
 * Fill in the blanks component.  Presents inputs for a list of parts of speech, which
 *
 * @param wordlist - an array of IndexedAndLabeledPOSItems
 * @returns Component
 */
function UserWordListEditor({
  wordList,
}: {
  wordList: Array<IndexedAndLabeledPOSItem>;
}) {
  const [userWordList, setUserWordList] = useState(resetUserValues(wordList));

  function handleOnChange(value: string, wordIndex: number) {
    setUserWordList(wordList => insertWordListItem(wordList, value, wordIndex));
  }

  function handleClear() {
    // TODO ADD CONFIRM AT SOME POINT!
    setUserWordList(resetUserValues(wordList));
  }

  function handleSubmit() {
    alert(userWordList.toString());
  }

  console.log(userWordList)

  return (
    <div className="user-word-list">
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleClear()
        }
      >
        Clear
      </button>
      {wordList.map((element: IndexedAndLabeledPOSItem, index: number) => {
        const keyIndex = `user-input-${index}`;

        return (
          <>
            <label htmlFor={keyIndex}>
              {element.friendlyPOS ? element.friendlyPOS.toUpperCase() : ""}
            </label>
            <input
              className="userPOSInput"
              key={keyIndex}
              id={keyIndex}
              value={userWordList[index].value}
              onChange={(e) => {handleOnChange(e.target.value, index)}}
            ></input>
          </>
        );
      })}
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      {/* </form> */}
    </div>
  );
}

export { UserWordListEditor };
