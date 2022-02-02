import { createReducer, on } from '@ngrx/store';
import { additionalData, Data } from '../../data.service';
import {
  ChangeListPaginator,
  LoadListDataEnd,
  LoadListDataStart,
  ShowAdditionalData,
} from './list.actions';

export interface State {
  // rows on the page
  data: Data[];
  // paginator
  pageIndex: number;
  listLength: number;
  // show addititonal data first in list
  showAdditionalData: boolean;
}

export const initialState: State = {
  data: [],
  pageIndex: 0,
  listLength: 0,
  showAdditionalData: false,
};

export const reducer = createReducer(
  initialState,
  on(LoadListDataStart, (state, action) => ({ ...state })),
  on(LoadListDataEnd, (state, action) => ({
    ...state,
    data: action.data,
    listLength: action.listLength,
  })),
  on(ChangeListPaginator, (state, action) => ({
    ...state,
    pageIndex: action.pageIndex,
  })),
  on(ShowAdditionalData, (state, action) => ({
    ...state,
    pageIndex: 1,
    data: additionalData,
    showAdditionalData: true,
  }))
);
