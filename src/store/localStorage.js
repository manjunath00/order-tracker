export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("orders");

    if (serializedState === null) {
      return undefined;
    }

    return {orders: JSON.parse(serializedState)};
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("orders", serializedState);
  } catch (err) {}
};
