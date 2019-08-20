import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { selectAllPositions, selectCurrentPosition } from './positions.selectors';
import { PositionsState } from './positions.reducer';
import * as PositionsActions from './positions.actions';

@Injectable()
export class PositionsFacade {
  allPositions$ = this.store.pipe(select(selectAllPositions));
  selectedPositions$ = this.store.pipe(select(selectCurrentPosition));


  constructor(private store: Store<PositionsState>) {}

  selectPosition(postionName: string) {
    this.store.dispatch(new PositionsActions.PositionSelected(postionName));
  }

  loadPositions() {
    this.store.dispatch(new PositionsActions.LoadPositions());
  }
}
