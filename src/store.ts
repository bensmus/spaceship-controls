import { createStore } from 'redux';

export type ActionType = 'CLICK_PANEL';
type Panel = 'Monitoring' | 'Controls' | 'External';

interface Action {
  type: ActionType;
  payload: Panel;
}

export interface State {
  selected: Panel;
}

const reducer = (state: State | undefined, action: Action): State => {
  switch (action.type) {
    case 'CLICK_PANEL':
      return { ...state, selected: action.payload };
    default:
      return { ...state, selected: 'Controls' };
  }
};

export const store = createStore(reducer);
console.log(store.getState());