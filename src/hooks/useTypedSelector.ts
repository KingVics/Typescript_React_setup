import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const usedTypeSelector: TypedUseSelectorHook<RootState> = useSelector;