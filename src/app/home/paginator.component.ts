import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
  <button (click)="onPreviousPage()">previous</button>
  <span>{{_pageNumber}} | {{total}}</span>
  <button (click)="onNextPage()">next</button>`,
  styles: [''],
})
export class PaginatorComponent {
  @Input() set pageNumber(num: number) {
    this._pageNumber = Number(num);
    this.paginatorChanged.emit(this._pageNumber);
  }
  @Input() total: number = 0;
  @Output() paginatorChanged: EventEmitter<number> = new EventEmitter<number>();
  _pageNumber: number = 0;

  onPreviousPage(): void {
    this._pageNumber = this._pageNumber - 1;
    this.paginatorChanged.emit(this._pageNumber);
  }
  onNextPage(): void {
    this._pageNumber = this._pageNumber + 1;
    this.paginatorChanged.emit(this._pageNumber);
  }

  start(): void {
    this.paginatorChanged.emit(this._pageNumber);
  }
}
