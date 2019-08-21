import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { PositionsState } from './positions.reducer';
import {
  PositionsActionTypes,
  LoadPositions,
  PositionsLoaded,
} from './positions.actions';
import { PositionsService, Position } from '@second-pass/core-data';

@Injectable()
export class PositionsEffects {
  @Effect() loadPositions$ = this.dataPersistence.fetch(PositionsActionTypes.LOAD_POSITIONS, {
      run: (action: LoadPositions, state: PositionsState) => {
        return this.positionsService.all().pipe(map((res: Position[]) => new PositionsLoaded(res)));
      },

      onError: (action: LoadPositions, error) => {
        console.error('Error', error);
      }
    });

  constructor(
    private dataPersistence: DataPersistence<PositionsState>,
    private positionsService: PositionsService
  ) {}
}
