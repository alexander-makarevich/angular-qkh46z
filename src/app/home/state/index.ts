import { ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../../state/index';
import { ListEffects } from './list/list.effects';
import * as fromList from './list/list.reducers';

export interface HomeState {
  list: fromList.State;
}

export interface State extends fromRoot.State {
  homeState: HomeState;
}

export const reducers: ActionReducerMap<HomeState> = {
  list: fromList.reducer,
};

export const effects: any[] = [ListEffects];
