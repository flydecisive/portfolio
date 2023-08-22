import { NAV_STATE } from '../actions/types/nav';

const initialState = {
  0: true,
  1: false,
  2: false,
  3: false,
};

export function navReducer(state = initialState, action: any) {
  switch (action.type) {
    case NAV_STATE: {
      const { navState } = action.payload;

      return navState;
    }
    default: {
      return state;
    }
  }
}
