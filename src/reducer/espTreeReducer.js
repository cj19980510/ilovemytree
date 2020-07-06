import { ESPTREE } from "../action/actionType";

const initState = {
  treeType: null
};

const espTreeReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ESPTREE:
      newState.treeType = action.payload;
      break;
    default:
      break;
  }

  return newState;
};

export default espTreeReducer;
