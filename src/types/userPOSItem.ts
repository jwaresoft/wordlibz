import { PosTaggedToken } from "wink-pos-tagger";

export type UserPOSItem = {
    originalIndex: number[];
    friendlyPOS: string;
} & PosTaggedToken