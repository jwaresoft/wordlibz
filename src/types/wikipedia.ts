/**
 * The subset of page info we get from wikipedia's api
 */
export type PageInfo = {
    pageid: number;
    ns: number;
    title: string;
    extract: string;
    contentmodel: string;
    pagelanguage: string;
    pagelanguagehtmlcode: string;
    pagelanguagedir: string;
    touched: string;
    lastrevid: number;
    length: number;
    fullurl: number;
    editurl: number;
    canonicalurl: number
}