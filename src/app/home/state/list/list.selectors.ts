import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '..';

export const getListState = createFeatureSelector<HomeState>('list');

export const getListDataState = createSelector(
  getListState,
  (state) => state.list.data
);

export const getPaginatorState = createSelector(getListState, (state) => ({
  pageIndex: state.list.pageIndex,
  listLength: state.list.listLength,
}));

export const getShowAdditionalStatus = createSelector(
  getListState,
  (state) => state.list.showAdditionalData
);
