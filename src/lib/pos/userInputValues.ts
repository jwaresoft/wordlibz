import { IndexedAndLabeledPOSItem } from "@/types/indexedAndLabeledPOSItem";
import { UserInputPOS } from "@/types/userInputPOS";

/**
 * Reduce Values to just those needed to collect user input
 */
function resetUserValues(
  indexedAndLabeledPOSItemList:
    | Array<IndexedAndLabeledPOSItem>
    | Array<UserInputPOS>,
): Array<UserInputPOS> {
  return indexedAndLabeledPOSItemList.map((element) => {
    return {
      value: "",
      pos: element.pos,
      originalIndex: element.originalIndex,
      friendlyPOS: element.friendlyPOS,
    };
  });
}

export { resetUserValues };
