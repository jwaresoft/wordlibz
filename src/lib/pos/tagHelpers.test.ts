import { describe, it, expect } from "vitest";
import { tagExtract, tagExtractFromPageInfo } from "./tagHelpers";
import { PageInfo } from "@/types/wikipedia";

const simpleString = "What a sentence!"

describe('tagHelpers.ts', () => {
    describe('tagExtract()', () => {
        it('should tokenize an extract', () => {
            const tokens = tagExtract(simpleString)
            expect(tokens.length).toEqual(4)
        })
        it('should return an empty array for an empty string', () => {
            const tokens = tagExtract('')
            expect(tokens.length).toEqual(0)
        })
    })
    describe('tagExtractFromPageInfo()', () => {
        it('should handle a PageInfo object and return a tokenized array from the extract', () => {
            const tokens = tagExtractFromPageInfo({extract: simpleString} as PageInfo)
            expect(tokens.length).toEqual(4)
        })
    })
})