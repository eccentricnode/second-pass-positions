import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPositions from './positions.reducer';
import { emptyPosition } from '@second-pass/core-data';

// Lookup the 'Positions' feature state managed by NgRx
export const selectPositionsState = createFeatureSelector<fromPositions.PositionsState>('positions');

export const selectPositionIds = createSelector(
  selectPositionsState,
  fromPositions.selectedPositionIds
);

export const selectPositionEntities = createSelector(
  selectPositionsState,
  fromPositions.selectPositionEntities
);

export const selectAllPositions = createSelector(
  selectPositionsState,
  fromPositions.selectAllPositions
);

export const selectCurrentPositionId = createSelector(
  selectPositionsState,
  fromPositions.getSelectedPositionId
);

export const selectCurrentPosition = createSelector(
  selectPositionEntities,
  selectCurrentPositionId,
  (positionEntities, positionId) => {
    return positionId ? positionEntities[positionId] : Object.assign({}, emptyPosition)
  }
);