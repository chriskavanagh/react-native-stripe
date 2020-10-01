export const addItem = (id, quantity, notes) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      id: id,
      quantity: quantity,
      notes: notes,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id: id,
    },
  };
};

export const addQuantity = (id) => {
  return {
    type: 'ADD_QUANTITY',
    payload: {
      id: id,
    },
  };
};

export const removeQuantity = (id) => {
  return {
    type: 'REMOVE_QUANTITY',
    payload: {
      id: id,
    },
  };
};
