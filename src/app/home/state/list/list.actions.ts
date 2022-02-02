import { createAction, props } from '@ngrx/store';
import { Data } from '../../data.service';

export enum ListActionsTypes {
  LOAD_LIST_DATA_START = '[STATE-LIST] LOAD LIST DATA_START',
  LOAD_LIST_DATA_END = '[STATE-LIST] LOAD LIST DATA END',
  CHANGE_LIST_PAGINATOR = '[STATE-LIST] CHANGE LIST PAGINATOR',
  SHOW_ADDITIONAL_DATA = '[STATE_LIST] SHOW ADDITIONAL DATA',
}

export const LoadListDataStart = createAction(
  ListActionsTypes.LOAD_LIST_DATA_START
);

// todo: а здесь какое состояние изменяет компонент?
export const LoadListDataEnd = createAction(
  ListActionsTypes.LOAD_LIST_DATA_END,
  props<{ data: Data[]; listLength: number }>()
);

// компонент изменяет состояние пагинатора.
export const ChangeListPaginator = createAction(
  ListActionsTypes.CHANGE_LIST_PAGINATOR,
  props<{ pageIndex: number }>()
);

export const ShowAdditionalData = createAction(
  ListActionsTypes.SHOW_ADDITIONAL_DATA
);
