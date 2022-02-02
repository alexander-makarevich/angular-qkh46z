import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Data } from './data.service';
import { HomeState } from './state';
import {
  ChangeListPaginator,
  LoadListDataStart,
  ShowAdditionalData,
} from './state/list/list.actions';
import {
  getListDataState,
  getPaginatorState,
} from './state/list/list.selectors';

@Component({
  selector: 'app-home',
  template: `
    <button (click)="showAdditioanalData()">Show Additional Data</button>
    <div class="parent">
      <ul>
          <li *ngFor="let row of (dataSource$ | async)">{{row.id}}. {{row.name}}</li>
      </ul>
      <app-paginator
        [total]="(paginatorState$ | async).listLength"  
        [pageNumber]="(paginatorState$ | async).pageIndex"
        (paginatorChanged)=" paginatorChanged($event)">
      </app-paginator>
    </div>`,
  styles: ['.parent { width:500px; height:300px; border: 1px solid #333; }'],
})
export class HomeComponent implements OnInit {
  dataSource$: Observable<Data[]>;
  paginatorState$: Observable<{ pageIndex: number; listLength: number }>;

  constructor(private store: Store<HomeState>) {}

  ngOnInit(): void {
    this.store.dispatch(LoadListDataStart());
    this.dataSource$ = this.store.pipe(select(getListDataState));
    this.paginatorState$ = this.store.pipe(select(getPaginatorState));
  }

  paginatorChanged(pageIndex: number): void {
    this.store.dispatch(ChangeListPaginator({ pageIndex }));
  }

  showAdditioanalData(): void {
    this.store.dispatch(ShowAdditionalData());
  }
}
