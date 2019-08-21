import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Position } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.scss']
})
export class PositionDetailsComponent {
  @Input() group: FormGroup;
  @Input() set position(value: Position) {
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name
    });
  }

  @Output() resetForm = new EventEmitter();

  reset() {
    this.resetForm.emit();
  }
}
