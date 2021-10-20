import { ActionType } from "../actionTypes"


interface ISEARCH_REPOSITORY {
    type: ActionType.SEARCH_REPOSITORY
}

interface ISEARCH_REPOSITORY_SUCCESS {
    type: ActionType.SEARCH_REPOSITORY_SUCCESS;
    payload: string[];
}

interface ISEARCH_REPOSITORY_ERROR {
    type: ActionType.SEARCH_REPOSITORY_ERROR;
    payload: string
}

interface ISEARCH_BOOK {
    type: ActionType.SEARCH_BOOK,
    payload: string[]
}

interface ISERACH_STAR_WARS {
    type: ActionType.SERACH_STAR_WARS
    payload: string[]
}

export type IAction = ISEARCH_REPOSITORY | ISEARCH_REPOSITORY_SUCCESS | ISEARCH_REPOSITORY_ERROR | ISEARCH_BOOK | ISERACH_STAR_WARS
