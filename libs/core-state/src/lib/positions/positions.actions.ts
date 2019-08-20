import { Action } from '@ngrx/store';

import { Position } from '@second-pass/core-data';

export enum PositionsActionTypes {
  POSITIONS_ACTION  = '[POSITIONS] Positions Action',
  POSITION_SELECTED = '[POSITIONS] Position Selected',
  LOAD_POSITIONS    = '[POSITIONS] Load Positions',
  POSITIONS_LOADED  = '[POSITIONS] Position Loaded'
}

export class Positions implements Action { 
  readonly type = PositionsActionTypes.POSITIONS_ACTION;
}

export class PositionSelected implements Action {
  readonly type = PositionsActionTypes.POSITION_SELECTED;
  constructor(public payload) { }
}

export class LoadPositions implements Action {
  readonly type = PositionsActionTypes.LOAD_POSITIONS;
  constructor() { }
}

export class PositionsLoaded implements Action {
  readonly type = PositionsActionTypes.POSITIONS_LOADED;
  constructor(public payload: Position[]) { }
}

export type PositionsAction = Positions
  | PositionSelected
  | LoadPositions
  | PositionsLoaded
;