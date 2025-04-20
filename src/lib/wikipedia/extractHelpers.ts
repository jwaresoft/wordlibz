import { PageInfo } from "@/types/wikipedia";

/**
 * Returns the page info from the array with the longest extract.
 *
 * @param pages
 * @returns
 */
function getPageInfoWithBestExtract(
  pages: Array<PageInfo>,
): PageInfo | undefined {
  return pages.reduce(function (a, b) {
    return a.extract?.length > b.extract?.length ? a : b;
  });
}

function pageInfoHasExtracts(pages: Array<PageInfo>): boolean {
  const extracts = pages.filter((pageInfo: PageInfo) => {
    return pageInfo.extract !== undefined;
  });

  return extracts.length > 0;
}

export { getPageInfoWithBestExtract, pageInfoHasExtracts };
