import { combineReducers } from "redux";
import repoReducer from "./repositoryReducers"

const reducer = combineReducers({
    repositories: repoReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>