import { describe, it, expect } from "vitest";
import {
  getPageInfoWithBestExtract,
  pageInfoHasExtracts,
} from "./extractHelpers";
import { PageInfo } from "@/types/wikipedia";

const testArray: Array<Partial<PageInfo>> = [
  {
    extract: "short one",
  },
  {
    extract: "a less short one",
  },
  {
    extract: "ok",
  },
  {
    extract:
      "This is the longest extract.  We should expect it to be choses by getPageInfoWithBestExtract().",
  },
];

describe("extractHelpers.test.ts", () => {
  describe("getPageInfoWithBestExtract()", () => {
    it("returns the page info with the longest extract", () => {
      const bestExtract = getPageInfoWithBestExtract(
        testArray as Array<PageInfo>,
      );

      expect(bestExtract).toEqual(testArray[3]);
    });
  });
  describe("verifyPageInfoHasExtracts()", () => {
    it("returns false if there are no extracts present in the PageInfo array", () => {
      const noExtracts = [{}, {}, {}, {}];
      expect(pageInfoHasExtracts(noExtracts as Array<PageInfo>)).toBe(false);
    });
    it("returns true if there are in fact extracts in the pageInfos", () => {
      expect(pageInfoHasExtracts(testArray as Array<PageInfo>)).toBe(true);
    });
    it("returns false if passed an empty array", () => {
      expect(pageInfoHasExtracts([] as Array<PageInfo>)).toBe(false);
    });
  });
});
