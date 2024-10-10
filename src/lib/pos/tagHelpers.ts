import { PageInfo } from "@/types/wikipedia";
import posTagger from "wink-pos-tagger";


/**
 * wrapper for tokenizeExtract which takes PageInfo as a parameter
 * 
 * @param pageInfo 
 * @returns 
 */
function tagExtractFromPageInfo(pageInfo: PageInfo) {
  return tagExtract(pageInfo?.extract);
}

/**
 * Tokenizes an extract (string)
 * 
 * @param extract 
 * @returns 
 */
function tagExtract(extract: string) {
  const tagger = new posTagger();
  return tagger.tagSentence(extract);
}


export {tagExtract, tagExtractFromPageInfo,  };
