import {
  FILTER_POULTRY,
  FILTER_SOUP,
  FILTER_BEEF,
  FILTER_CHEF,
  FILTER_SEAFOOD,
  FILTER_PORK,
  FILTER_VEGETABLE,
  FILTER_ALL,
} from './types';

// actions for menu

export const getMenu = (_) => {
  return {
    type: FILTER_ALL,
  };
};

export const filterSoup = (_) => {
  return {
    type: FILTER_SOUP,
  };
};

export const filterVegetable = (_) => {
  return {
    type: FILTER_VEGETABLE,
  };
};

export const filterPoultry = (_) => {
  return {
    type: FILTER_POULTRY,
  };
};

export const filterBeef = (_) => {
  return {
    type: FILTER_BEEF,
  };
};

export const filterChef = (_) => {
  return {
    type: FILTER_CHEF,
  };
};

export const filterSeafood = (_) => {
  return {
    type: FILTER_SEAFOOD,
  };
};

export const filterPork = (_) => {
  return {
    type: FILTER_PORK,
  };
};

// without return
/* export const filterPoultry = () => ({
    type: FILTER_POULTRY,
  });
   */
