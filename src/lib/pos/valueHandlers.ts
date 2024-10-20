import { PosTaggedToken } from "wink-pos-tagger";
import { isProperNoun, getFriendlyPOSName } from "./posMapsAndFunctions";
import { IndexedAndLabeledPOSItem } from "@/types/indexedAndLabeledPOSItem";

type ProperNounMap = {[key: string] : Array<number>}

/**
 * 
 * 
 * @param tagList 
 * @returns 
 */
function indexValuesToReplace(tagList: Array<PosTaggedToken>): Array<IndexedAndLabeledPOSItem> {
    // we will store proper nouns here for collecting all indices
    const properNounMap: ProperNounMap = {}

    // TODO: TEST THIS!!
    function handleProperNouns(posTaggedItem: PosTaggedToken, index: number) {
        const word = posTaggedItem.value
        if(!properNounMap[word]) {
            properNounMap[word] = [index]
        } else {
            properNounMap[word].push(index)
        }

        return properNounMap[word]
    }

    return tagList.map((posTaggedItem, index): IndexedAndLabeledPOSItem => {
        const indexToAdd = isProperNoun(posTaggedItem.pos) ? handleProperNouns(posTaggedItem, index) : [index]
        const friendlyPOS = getFriendlyPOSName(posTaggedItem.pos)
        return {
            ...posTaggedItem,
            originalIndex: indexToAdd,
            friendlyPOS: friendlyPOS
        } 
    })
}

/**
 * 
 * 
 */
// function reduceListForUserOptions(userTagListItems: IndexedAndLabeledPOSItem) {

// }


// determine how many words we want to pick based on length of the original extract


export { indexValuesToReplace }