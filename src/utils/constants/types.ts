import { ORDER, TYPE_CONTENT } from "./enums";

type Header = {
    title: string,
    width?: number,
    order?: ORDER
}

type Line = Item[];
type Item = ContentItem[];

type ContentItem = {
    content: string,
    color?: string
    type?: TYPE_CONTENT[],
    isBadge?: boolean,
    altContent?: string,
}

type ErrorResponseApi = {
    data:object,
    message:{
        en:string,
        fr:string
    },
}

type TokenPage = {
    page:number,
    token:string
}

export type { Header, Item, ContentItem, Line, ErrorResponseApi,TokenPage }