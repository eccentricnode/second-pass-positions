import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Position } from '@second-pass/core-data';
import { PositionsFacade } from '@second-pass/core-state';

@Component({
  selector: 'second-pass-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  form: FormGroup;
  positions$: Observable<Position[]> = this.positionsFacade.allPositions$;
  selectedPosition$: Observable<Position> = this.positionsFacade.selectedPositions$;
  
  constructor(
    private positionsFacade: PositionsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.positionsFacade.loadPositions();
    this.initForm();
    this.reset();
  }

  selectPosition(position) {
    this.positionsFacade.selectPosition(position.id);
  }

  reset() {
    this.form.reset();
    this.selectPosition({name: ''});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: '',
      name: { value: '', disabled: true },
    });
  }
}
