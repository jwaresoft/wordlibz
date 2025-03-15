import { describe, it, expect } from "vitest";
import { mockUserWords } from "./__mock__/mockUserWords";
import { insertWordListItem } from "./userWorldListEditorHelpers";

describe("userWorldListEditorHelpers.ts", () => {
  describe("insertWordListItem()", () => {
    it("should return a new array with the new value inserted at the passed index", () => {});
        const newWord = "acceptable";
        const newIndex = 3;
        const newWordList = insertWordListItem(mockUserWords, newWord, newIndex);

        newWordList.forEach((wordObj, index) => {
            const mockWordListObject = mockUserWords[index];
            if(newIndex === index) {
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
