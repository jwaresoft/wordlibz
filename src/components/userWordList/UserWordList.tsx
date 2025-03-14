import { IndexedAndLabeledPOSItem } from "@/types/indexedAndLabeledPOSItem";
import "./userWordList.css";

/**
 *
 * Fill in the blanks component.  Presents inputs for a list of parts of speech, which
 *
 * @param wordlist - an array of IndexedAndLabeledPOSItems
 * @returns Component
 */
function UserWordList({
  wordList,
}: {
  wordList: Array<IndexedAndLabeledPOSItem>;
}) {
  return (
    <div className="user-word-list-main">
      <form>
        <button>Clear</button>
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
              ></input>
            </>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export { UserWordList };
