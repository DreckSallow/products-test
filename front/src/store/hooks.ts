import { useSelector, useDispatch } from "react-redux";
import { Store, StoreDispatch } from "./index";
import { TypedUseSelectorHook } from "react-redux/es/types";

export const useAppDispatch: () => StoreDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;

export const useAppStore = <TSelected>(
	selector: (s: Store) => TSelected,
): [TSelected, StoreDispatch] => {
	return [useAppSelector(selector), useAppDispatch()];
};
