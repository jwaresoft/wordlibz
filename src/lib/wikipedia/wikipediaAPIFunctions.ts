import { PageInfo } from "@/types/wikipedia";

/**
 * Fetches an array of PageInfo of random wikipedia articles
 * 
 * Note:
 *
 * You can build wikipedia api calls with the Wikipedia API sandbox.
 *
 * https://en.wikipedia.org/wiki/Special:ApiSandbox
 * 
 * @param articleCount (optional) the number of article PageInfo objects to request.  Default is 30. 
 * @returns 
 */
async function getRandomArticleData(articleCount?: number): Promise<Array<PageInfo>> {
  const articles = articleCount ? articleCount : 30;
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=random&origin=*&formatversion=2&exsentences=10&exintro=1&explaintext=1&exsectionformat=plain&grnnamespace=0&grnlimit=${articles}&inprop=url`
  );
  const responseJSON = await response.json();

  return responseJSON.query.pages;
}

export { getRandomArticleData };
