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
 * @returns 
 */
async function getRandomArticleData(): Promise<Array<PageInfo>> {
  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=random&origin=*&formatversion=2&exsentences=10&exintro=1&explaintext=1&exsectionformat=plain&grnnamespace=0&grnlimit=30&inprop=url"
  );
  const responseJSON = await response.json();

  return responseJSON.query.pages;
}

export { getRandomArticleData };
