import { PosTaggedToken } from "wink-pos-tagger";

const sentencePunctuation = new Set([".", "!", "?"]);
const openingPunctuationSet = new Set(["[", "{", "("]);
const closingPunctuationSet = new Set(["]", "}", ")"]);
const additionalNoSpace = new Set(["/", "\\"]);

/**
 * reconstructs the text from the tag array
 *
 * @param tagsArray
 * @returns string
 */
function reconstructTextFromTagArray(tagsArray: Array<PosTaggedToken>): string {
  let returnString = tagsArray[0].value;
  let waitingForClosingQuote = false;

  for (let i = 1; i < tagsArray.length; i++) {
    const currentValue = tagsArray[i].value;
    const lastValue = tagsArray[i - 1]?.value;
    let valueToConcat = "";

    if (sentencePunctuation.has(lastValue) && !waitingForClosingQuote) {
      returnString = returnString.concat(`  ${currentValue}`);
    } else if (currentValue === '"') {
      valueToConcat = waitingForClosingQuote
        ? currentValue
        : ` ${currentValue}`;
      waitingForClosingQuote = !waitingForClosingQuote;
      // Do not add space before
    } else if (
      openingPunctuationSet.has(lastValue) ||
      closingPunctuationSet.has(currentValue) ||
      sentencePunctuation.has(currentValue) ||
      currentValue?.startsWith("'") ||
      additionalNoSpace.has(currentValue) ||
      additionalNoSpace.has(lastValue) ||
      (lastValue === '"' && waitingForClosingQuote ) ||
      currentValue === ","
    ) {
        valueToConcat = currentValue;

      // Add space before
    } else {
        valueToConcat = ` ${currentValue}`;
    }

    returnString = returnString.concat(valueToConcat);
  }

  return returnString;
}

export { reconstructTextFromTagArray };
