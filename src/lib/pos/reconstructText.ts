import { PosTaggedToken } from "wink-pos-tagger";

const sentencePunctuation = new Set([".", "!", "?"]);
const openingPunctuationSet = new Set(["[", "{", "("]);
const closingPunctuationSet = new Set(["]", "}", ")"]);
const noSpaceBefore = new Set([";", ":"]);
const additionalNoSpace = new Set(["/", "\\"]);

/**
 * Reconstructs the text from the tag array
 *
 * This is likely to not be fully correct at the moment.  It also doesn't always produce a 1-1
 * match when untokenizing the original as wikipedia articles are full of weird spacing and other
 * typos and issues.  It should produce a pleasant to look at and read recreation of the tokens though.
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
      noSpaceBefore.has(currentValue) ||
      (lastValue === '"' && waitingForClosingQuote) ||
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
