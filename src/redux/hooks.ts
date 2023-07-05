import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { RootState, AppDispatch } from './store';

// To access store use useAppSelector hook with state => state.sliceName.property
// To make change to state use useAppSelector hook with reducer function as an argument, for example useAppSelector(setIsLoading(true))
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;