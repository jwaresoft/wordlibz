import "./userWordListEditor.css";
import { Button } from "../buttons/buttons";
import { UserInputPOS } from "@/types/userInputPOS";

export type UserWordListEditorProps = {
  wordList: Array<UserInputPOS>;
  handleIndexChange: (word: string, index: number) => void;
  submitUserWords: () => void;
};

/**
 *
 * Fill in the blanks component.  Presents inputs for a list of parts of speech, which
 *
 * @param wordlist - an array of IndexedAndLabeledPOSItems
 * @returns Component
 */
function UserWordListEditor({
  wordList,
  handleIndexChange,
  submitUserWords,
}: UserWordListEditorProps) {
  return (
    <div className="user-word-list">
      {wordList.map((element: UserInputPOS, index: number) => {
        const keyIndex = `user-input-${index}`;

        return (
          <>
            <label htmlFor={keyIndex}>
              {element.friendlyPOS ? element.friendlyPOS.toUpperCase() : ""}
            </label>
            <input
              className="user-pos-input"
              key={keyIndex}
              id={keyIndex}
              value={wordList[index].value}
              onChange={(e) => {
                handleIndexChange(e.target.value, index);
              }}
            ></input>
          </>
        );
      })}
      <div className="user-wordlist-submit-zone">
        <Button
          onClickHandler={() => {
            submitUserWords();
          }}
          label={"SUBMIT"}
        />
      </div>
      {/* </form> */}
    </div>
  );
}

export { UserWordListEditor };
