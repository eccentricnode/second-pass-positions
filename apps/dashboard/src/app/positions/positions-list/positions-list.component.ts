import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'second-pass-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent {
  @Input() positions: Position;
  @Output() selected = new EventEmitter();

  select(position: Position) {
    this.selected.emit(position);
  }
}
