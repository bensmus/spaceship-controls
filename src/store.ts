import { createStore } from 'redux';

export enum ActionType {
  CLICK_PANEL = 'CLICK_PANEL'
}

type Panel = 'Monitoring' | 'Controls' | 'External'

interface Action {
  type: ActionType;
  payload: Panel;
}

export interface State {
  selected: Panel;
}

const reducer = (state: State | undefined, action: Action): State => {
  return { ...state, selected: action.payload};
}

export const store = createStore(reducer, { selected: 'Controls' });