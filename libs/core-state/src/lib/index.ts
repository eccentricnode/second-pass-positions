import { ActionReducerMap } from '@ngrx/store';
import * as fromPositions from './positions/positions.reducer';

export interface AppState {
    positions: fromPositions.PositionsState;
}

export const reducers: ActionReducerMap<AppState> = {
    positions: fromPositions.positionsReducer,
}