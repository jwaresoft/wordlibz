import { describe, it, expect } from "vitest";
import { mockUserWords } from "../../components/userWordListEditor/__mock__/mockUserWords";
import { insertWordListItemReducer } from "./insertWordListItemReducer";

describe("insertWordListItemReducer.ts", () => {
  describe("insertWordListItemReducer()", () => {
    it("should return a new array with the new value inserted at the passed index", () => {});
    const newWord = "acceptable";
    const newIndex = 3;
    const newWordList = insertWordListItemReducer(
      mockUserWords,
      newWord,
      newIndex,
    );

    newWordList.forEach((wordObj, index) => {
      const mockWordListObject = mockUserWords[index];
      if (newIndex === index) {
        expect(wordObj.value !== mockWordListObject.value);
        expect(wordObj.value === newWord);
        expect(wordObj.pos === mockWordListObject.pos);
        expect(wordObj.friendlyPOS === mockWordListObject.friendlyPOS);
      } else {
        expect(wordObj === mockWordListObject);
      }
    });
  });
});
