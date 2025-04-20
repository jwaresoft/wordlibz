import { describe, it, expect } from "vitest";
import { indexValuesToReplace } from "./valueHandlers";
import { tagExtract } from "./tagHelpers";
import { getFriendlyPOSName } from "./posMapsAndFunctions";

describe("valueHandlers.ts", () => {
  describe("indexValuesToReplace()", () => {
    it("should return the correct index for each item", () => {
      const testSentencesTagged = tagExtract(
        "It was the best of times, it was the worst of times.  There were other times as well.",
      );
      const taggedWithIndex = indexValuesToReplace(testSentencesTagged);

      taggedWithIndex.forEach((taggedWord) => {
        const currentOriginalValue =
          testSentencesTagged[taggedWord.originalIndex[0]];
        const keys = Object.keys(currentOriginalValue);
        keys.forEach((key) => {
          // @ts-expect-error typescript is awful and cant detect that the keys we pulled from a typed object wont be other strings
          expect(taggedWord[key]).toEqual(currentOriginalValue[key]);
        });
      });
    });
    it("should return multiple indices for a proper noun if it occurs multiple times", () => {
      const testSentencesTagged = tagExtract(
        "Martin was a tv show that all the kids watched when Martin was on.",
      );
      const taggedWithIndex = indexValuesToReplace(testSentencesTagged);

      let martinCount = 0;
      taggedWithIndex.forEach((element) => {
        if (element.value === "Martin") {
          expect(element.originalIndex.length).toEqual(2);
          martinCount++;
        }
      });
      expect(martinCount).toEqual(2);
    });
    it("should include the pos friendly name", () => {
      const testSentencesTagged = tagExtract(
        "Martin was a tv show that all the kids watched when Martin was on.",
      );
      const taggedWithIndex = indexValuesToReplace(testSentencesTagged);

      taggedWithIndex.forEach((element) => {
        if (element.value === "Martin") {
          expect(element.friendlyPOS).toEqual(getFriendlyPOSName(element.pos));
        }
      });
    });
  });
});
