import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import { HomeState } from '..';
import { DataService } from '../../data.service';
import { ChangeListPaginator, LoadListDataEnd, LoadListDataStart, ShowAdditionalData } from './list.actions';
import { getPaginatorState, getShowAdditionalStatus } from './list.selectors';

@Injectable()
export class ListEffects {
  constructor(
    private actions$: Actions,
    private service: DataService,
    private store: Store<HomeState>
  ) {}

  // todo: а где используется getListData$?
  getListData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadListDataStart),
      switchMap((action) =>
        this.store.pipe(select(getPaginatorState)).pipe(
          take(1),
          switchMap((paginatorState) =>
            this.service
              .getData(paginatorState.pageIndex)
              .pipe(map((data) => LoadListDataEnd(data)))
          )
        )
      )
    )
  );

   setListPaginator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChangeListPaginator),
         withLatestFrom(this.store.select(getShowAdditionalStatus)),
      map(([action, isShowAdditional]) =>    isShowAdditional ? ShowAdditionalData() : LoadListDataStart()
      )
    )
  );

}
