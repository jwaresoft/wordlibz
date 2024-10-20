import { PosTaggedToken } from "wink-pos-tagger";

export type IndexedAndLabeledPOSItem = {
    originalIndex: number[];
    friendlyPOS: string | undefined;
} & PosTaggedToken