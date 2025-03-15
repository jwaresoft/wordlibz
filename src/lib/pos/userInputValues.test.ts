import { describe, it, expect } from "vitest";
import { resetUserValues } from "./userInputValues";
import { indexValuesToReplace } from "./valueHandlers";
import { tagExtract } from "./tagHelpers";
import { IndexedAndLabeledPOSItem } from "@/types/indexedAndLabeledPOSItem";


describe('userInputValues.ts', () => {
    describe('resetUserValues()', () => {
        it('should remove additional keys from UserPOSItem type', () => {
            const testSentencesTagged = tagExtract("What is the biggest hat you own?")
            const taggedWithIndex = indexValuesToReplace(testSentencesTagged);
            const userReadyValues = resetUserValues(taggedWithIndex)

            userReadyValues.forEach((element, index) => {
                expect(element.friendlyPOS).toEqual(taggedWithIndex[index].friendlyPOS);
                expect(element.originalIndex).toEqual(taggedWithIndex[index].originalIndex);
                expect(element.pos).toEqual(taggedWithIndex[index].pos);
                expect(element.value).toEqual("");

                expect((element as unknown as IndexedAndLabeledPOSItem).lemma).toBe(undefined)
                expect((element as unknown as IndexedAndLabeledPOSItem).normal).toBe(undefined)
                expect((element as unknown as IndexedAndLabeledPOSItem).tag).toBe(undefined)
            })

            // verify all values are accounted for
            expect(userReadyValues.length).toEqual(taggedWithIndex.length)
        })
        it('should reset values when called but keep other keys untouched', () => {
            const testArray = [
                {
                  value: 'hello',
                  pos: 'WP',
                  originalIndex: [ 0 ],
                  friendlyPOS: undefined
                },
                { value: '', pos: 'VBZ', originalIndex: [ 1 ], friendlyPOS: 'Verb' },
                {
                  value: 'xcvxcv',
                  pos: 'DT',
                  originalIndex: [ 2 ],
                  friendlyPOS: undefined
                },
                {
                  value: 'xcvxcv',
                  pos: 'JJS',
                  originalIndex: [ 3 ],
                  friendlyPOS: 'Adjective'
                },
                { value: '', pos: 'NN', originalIndex: [ 4 ], friendlyPOS: 'Noun' },
                {
                  value: 'xcvxcv',
                  pos: 'PRP',
                  originalIndex: [ 5 ],
                  friendlyPOS: undefined
                },
                {
                  value: '',
                  pos: 'JJ',
                  originalIndex: [ 6 ],
                  friendlyPOS: 'Adjective'
                },
                { value: 'xcvcxv', pos: '.', originalIndex: [ 7 ], friendlyPOS: undefined }
              ]

        const userResetValues = resetUserValues(testArray)
        userResetValues.forEach((element, index) => {
            expect(element.friendlyPOS).toEqual(testArray[index].friendlyPOS);
            expect(element.originalIndex).toEqual(testArray[index].originalIndex);
            expect(element.pos).toEqual(testArray[index].pos);
            expect(element.value).toEqual("");
        })
        })
    })
})
