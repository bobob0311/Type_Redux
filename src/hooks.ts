import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useCounterDispatch: () => AppDispatch = useDispatch;
export const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector



