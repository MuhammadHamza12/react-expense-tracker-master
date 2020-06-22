const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return [action.payload, ...state];
    }
    case "DELETE_TRANSACTION": {
      let getAllData = [...state];
      let FilteredData = getAllData.filter(
        (item, index) => index !== action.payload.itemIndex
      );
      debugger;
      return [...FilteredData];
    }
    default:
      return state;
  }
};

export default TransactionReducer;
