/**
 * You can build wikipedia api calls with the Wikipedia API sandbox.
 * 
 * https://en.wikipedia.org/wiki/Special:ApiSandbox 
 * 
 */


// TODO: TYPE THIS ELSEWHERE
/**
 * Returns an Array of assorted data from random wikipedia articles including extracts
 * 
 */
async function getRandomArticleData() {
    const response = await fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=random&origin=*&formatversion=2&exsentences=10&exintro=1&explaintext=1&exsectionformat=plain&grnnamespace=0&grnlimit=30');
    const responseJSON =  await response.json();

    return responseJSON.query.pages;
}

export { getRandomArticleData }

//  https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=random&formatversion=2&exsentences=10&exintro=1&explaintext=1&exsectionformat=plain&grnnamespace=0&grnlimit=30