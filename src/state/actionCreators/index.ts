import axios from "axios"
import { Dispatch } from "react";
import { ActionType } from "../actionTypes";
import { IAction } from "../action";


export const searchRepository = (query: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORY
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: query
                }
            })

            const names = data.objects.map((item: any) => ( item.package.name ))

            dispatch({
                type: ActionType.SEARCH_REPOSITORY_SUCCESS,
                payload: names
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORY_ERROR,
                payload: error.message
            })
        }

    }
}

export const SearchBooks = () => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORY
        });

        try {
            const {data}  = await axios.get('https://www.anapioficeandfire.com/api/books')
            console.log(data)
            dispatch({
                type: ActionType.SEARCH_BOOK,
                payload: data.map((x: any) => x.name)
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORY_ERROR,
                payload: error.message
            })
        }

    }
}


export const StarWars = (query: string) => {
    return async(dispatch: Dispatch<IAction>) => {
        try {
            const { data } = await axios.get('https://swapi.dev/api/people/?search=', {
                params: query
            })
            dispatch({
                type: ActionType.SERACH_STAR_WARS,
                payload: data
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORY_ERROR,
                payload: error.message
            })
        }
    }
}