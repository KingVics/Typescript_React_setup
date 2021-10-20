import  {IAction} from "../action"
import {ActionType} from "../actionTypes"

interface IRepository {
    loading: boolean;
    data: string[];
    error: string | null
}

const intiateState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: IRepository = intiateState, action: IAction ): IRepository => {
    switch(action.type) {
        case ActionType.SEARCH_REPOSITORY:
            return {loading: true, error: null, data: []}
        case ActionType.SEARCH_REPOSITORY_SUCCESS:
            return { loading: false, error: null, data: action.payload}
        case ActionType.SEARCH_REPOSITORY_ERROR:
            return { loading: false, error: action.payload, data: []}
        case ActionType.SEARCH_BOOK:
            return { loading: false, error: null, data: action.payload}
        case ActionType.SERACH_STAR_WARS:
            return { loading: false, error: null, data: action.payload}
        default:
            return state;
    }
}

export default reducer;