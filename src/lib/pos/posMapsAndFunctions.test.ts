import { describe, it, expect } from "vitest";
import {
  nounTypes,
  getFriendlyPOSName,
  properNounTypes,
  verbTypes,
  adjectiveTypes,
  adverbTypes,
  posFriendlyNames,
  isNoun,
  isVerb,
  isAdjective,
  isAdverb,
  isProperNoun,
} from "./posMapsAndFunctions";

const otherValues = [
  "IN",
  "FW",
  "DT",
  "CD",
  "CC",
  "LS",
  "MD",
  "PDT",
  "POS",
  "PRP$",
  "PRP",
  "WDT",
];

describe("posMapsAndFunctions.ts", () => {
  describe("getFriendlyPOSName()", () => {
    it("should include give a friendly name for our desired groups", () => {
      nounTypes.forEach((posTag) => {
        expect(getFriendlyPOSName(posTag)).toEqual(posFriendlyNames.Noun);
      });

      verbTypes.forEach((posTag) => {
        expect(getFriendlyPOSName(posTag)).toEqual(posFriendlyNames.Verb);
      });

      properNounTypes.forEach((posTag) => {
        expect(getFriendlyPOSName(posTag)).toEqual(
          posFriendlyNames.Proper_Noun
        );
      });

      adverbTypes.forEach((posTag) => {
        expect(getFriendlyPOSName(posTag)).toEqual(posFriendlyNames.Adverb);
      });

      adjectiveTypes.forEach((posTag) => {
        expect(getFriendlyPOSName(posTag)).toEqual(posFriendlyNames.Adjective);
      });
    });
    it("should return undefined for other values", () => {
      otherValues.forEach((posTag) => {
        expect(getFriendlyPOSName(posTag)).toEqual(undefined);
      });
    });
    describe("isNoun()", () => {
      it("should return true for nouns", () => {
        nounTypes.forEach((posTag) => {
          expect(isNoun(posTag)).toEqual(true);
        });
      });
      it("should return false for proper nouns", () => {
        properNounTypes.forEach((posTag) => {
          expect(isNoun(posTag)).toEqual(false);
        });
      });
      it("should return false for all other values", () => {
        const mergedTypes = [
          ...adjectiveTypes,
          ...adverbTypes,
          ...verbTypes,
          ...otherValues,
        ];
        mergedTypes.forEach((posTag) => {
          expect(isNoun(posTag)).toEqual(false);
        });
      });
    });
    describe("isVerb", () => {
      it("should return true for verbs", () => {
        verbTypes.forEach((posTag) => {
          expect(isVerb(posTag)).toEqual(true);
        });
      });
      it("should return false for all other values", () => {
        const mergedTypes = [
          ...adjectiveTypes,
          ...adverbTypes,
          ...nounTypes,
          ...properNounTypes,
          ...otherValues,
        ];
        mergedTypes.forEach((posTag) => {
          expect(isVerb(posTag)).toEqual(false);
        });
      });
    });
    describe("isAdjective()", () => {
      it("should return true for adjectives", () => {
        adjectiveTypes.forEach((posTag) => {
          expect(isAdjective(posTag)).toEqual(true);
        });
      });
      it("should return false for all other values", () => {
        const mergedTypes = [
          ...verbTypes,
          ...adverbTypes,
          ...nounTypes,
          ...properNounTypes,
          ...otherValues,
        ];
        mergedTypes.forEach((posTag) => {
          expect(isAdjective(posTag)).toEqual(false);
        });
      });
    });
    describe("isAdverb()", () => {
      it("should return true for adverbs", () => {
        adverbTypes.forEach((posTag) => {
          expect(isAdverb(posTag)).toEqual(true);
        });
      });
      it("should return false for all other values", () => {
        const mergedTypes = [
          ...verbTypes,
          ...adjectiveTypes,
          ...nounTypes,
          ...properNounTypes,
          ...otherValues,
        ];
        mergedTypes.forEach((posTag) => {
          expect(isAdverb(posTag)).toEqual(false);
        });
      });
    });
    describe("isProperNoun()", () => {
        it("should return true for proper nouns", () => {
            properNounTypes.forEach((posTag) => {
              expect(isProperNoun(posTag)).toEqual(true);
            });
          });
          it("should return false for nouns", () => {
            nounTypes.forEach((posTag) => {
              expect(isProperNoun(posTag)).toEqual(false);
            });
          });
          it("should return false for all other values", () => {
            const mergedTypes = [
              ...adjectiveTypes,
              ...adverbTypes,
              ...verbTypes,
              ...otherValues,
            ];
            mergedTypes.forEach((posTag) => {
              expect(isProperNoun(posTag)).toEqual(false);
            });
          });
    });
  });
});
