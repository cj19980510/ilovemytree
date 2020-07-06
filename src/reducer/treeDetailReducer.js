import { TREEDETAIL } from "../action/actionType";

const initState = {
  treeDetails: null
};

const treeDetailReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case TREEDETAIL:
      newState.treeDetails = action.payload;
      break;
    default:
      break;
  }

  return newState;
};

export default treeDetailReducer;
