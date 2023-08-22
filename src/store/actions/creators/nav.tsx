import { NAV_STATE } from '../types/nav';

export const setNavState = (navState: any) => ({
  type: NAV_STATE,
  payload: { navState },
});
