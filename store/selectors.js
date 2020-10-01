//import {createSelector} from 'reselect';

//  selectors (using reselect to memoize)
export const allSelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items,
);

export const soupSelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items.filter((item) => item.type === 'soup'),
);

export const beefSelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items.filter((item) => item.type === 'beef'),
);

export const poultrySelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items.filter((item) => item.type === 'chicken'),
);

export const seafoodSelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items.filter((item) => item.type === 'seafood'),
);

export const porkSelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items.filter((item) => item.type === 'pork'),
);

export const vegetableSelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items.filter((item) => item.type === 'vegetable'),
);

export const chefSelector = createSelector(
  (state) => state.menuReducer.items,
  (items) => items.filter((item) => item.type === 'chef'),
);
