import { create } from "zustand";
import { insertWordListItemReducer } from "../reducers/insertWordListItemReducer";
import { UserInputPOS } from "@/types/userInputPOS";

/**
 * Type definition for the UserWordListState store, a zustand store used to power the app
 */
export type WordLibzState = {
  userWordList?: Array<UserInputPOS>;
  insertUserWordListItem: (word: string, index: number) => void;
  setUserWordList: (list: Array<UserInputPOS>) => void;
};

export const useWordLibzState = create((set) => ({
  userWordList: undefined,
  insertUserWordListItem: (word: string, index: number) =>
    set((state: WordLibzState) => ({
      userWordList: insertWordListItemReducer(
        state.userWordList || [],
        word,
        index,
      ),
    })),
  setUserWordList: (list: Array<UserInputPOS>) => set({ userWordList: list }),
}));
