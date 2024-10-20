import { IndexedAndLabeledPOSItem } from "@/types/indexedAndLabeledPOSItem";
import "./userWordList.css";

function UserWordList({ wordList }: { wordList: Array<IndexedAndLabeledPOSItem> }) {
  console.log(wordList);
  return (
    <div className="user-word-list-main">
      <button>Clear</button>
      {wordList.map((element, index) => {
        const keyIndex = `user-input-${index}`;

        return (
          <>
            <label htmlFor={keyIndex}>
              {element.friendlyPOS.toUpperCase()}
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
    </div>
  );
}

export { UserWordList };
