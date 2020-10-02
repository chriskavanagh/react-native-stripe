//import {createSelector} from 'reselect';
import {initialState} from '../data';

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_ALL':
      return {
        ...state,
        items: [...initialState.items],
      };

    case 'FILTER_SOUP':
      const soupState = initialState.items.filter(
        (item) => item.type === 'soup',
      );
      return {
        ...state,
        items: [...soupState],
      };

    case 'FILTER_BEEF':
      const beefState = initialState.items.filter(
        (item) => item.type === 'beef',
      );
      return {
        ...state,
        items: [...beefState],
      };

    case 'FILTER_CHEF':
      const chefState = initialState.items.filter(
        (item) => item.type === 'chef',
      );
      return {
        ...state,
        items: [...chefState],
      };

    case 'FILTER_POULTRY':
      const poultryState = initialState.items.filter(
        (item) => item.type === 'chicken',
      );
      return {
        ...state,
        items: [...poultryState],
      };

    case 'FILTER_PORK':
      const porkState = initialState.items.filter(
        (item) => item.type === 'pork',
      );
      return {
        ...state,
        items: [...porkState],
      };

    case 'FILTER_SEAFOOD':
      const seafoodState = initialState.items.filter(
        (item) => item.type === 'seafood',
      );
      return {
        ...state,
        items: [...seafoodState],
      };

    case 'FILTER_VEGETABLE':
      const vegetableState = initialState.items.filter(
        (item) => item.type === 'vegetable',
      );
      return {
        ...state,
        items: [...vegetableState],
      };

    default:
      return state;
  }
}

export default menuReducer;
