/* eslint-disable @typescript-eslint/ban-ts-comment */
import { reconstructTextFromTagArray } from "./reconstructText";
import { tagExtract } from "./tagHelpers";
import { describe, it, expect } from "vitest";


// helper since most of these sentences are identical
function tagAndExpectSentence(sentence: string) {
  const taggedList = tagExtract(sentence);

  // reconstruct the sentence
  const reconstructedSentence = reconstructTextFromTagArray(taggedList);
  expect(reconstructedSentence).toEqual(sentence);
}

describe("reconstructTextFromTagArray()", () => {
  describe("One off test sentences", () => {
    it("should reconstruct sentence with a contraction!", () => {
      // create a tagged list from the sample sentence.
      const sampleSentence = "Let's have a great day!";
      tagAndExpectSentence(sampleSentence);
    });
    it("should reconstruct a sentence with a comma ", () => {
      const sampleSentence = "He looks cool, but is he cool?";
      tagAndExpectSentence(sampleSentence);
    });
    it("should reconstruct a sentence with parenthesis and a date ", () => {
      const sampleSentence = "Jeremy (Born 9/11/2001) was born on 9/11.";
      tagAndExpectSentence(sampleSentence);
    });
    it("should reconstruct a sentence with quotes ", () => {
      const sampleSentence = 'Jeremy said "You are a real bully", and then he said "and I mean it!"';
      tagAndExpectSentence(sampleSentence);
    });
    it("should reconstruct a sentence with colons and semicolons ", () => {
        const sampleSentence = 'Joey Bishop (nee; something) had a colon: a colon.';
        tagAndExpectSentence(sampleSentence);
      });
  });
});
