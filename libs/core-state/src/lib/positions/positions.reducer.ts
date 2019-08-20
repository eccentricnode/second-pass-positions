import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Position } from '@second-pass/core-data';
import { PositionsAction, PositionsActionTypes } from './positions.actions';

export interface PositionsState extends EntityState<Position> {
  selectedPositionId: string | null;
}

export const adapter: EntityAdapter<Position> = createEntityAdapter<Position>();
export const initialState: PositionsState = adapter.getInitialState({
  selectedPositionId: null,
});

export function positionsReducer(state: PositionsState = initialState, action: PositionsAction): PositionsState {
  switch (action.type) {
    case PositionsActionTypes.POSITION_SELECTED: {
      return Object.assign({}, state, { selectedPositionId: action.payload });
    }

    case PositionsActionTypes.POSITIONS_LOADED: {
      return adapter.upsertMany(action.payload, state);
    }

    default: 
      return state;
  }
}

export const getSelectedPositionId = (state: PositionsState) => state.selectedPositionId;

// get the selectors...

export const {
  selectIds: selectedPositionIds,
  selectEntities: selectPositionEntities,
  selectAll: selectAllPositions,
  selectTotal: selectPositionTotal
} = adapter.getSelectors();