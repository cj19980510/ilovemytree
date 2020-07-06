import { DIARYLIST } from "../action/actionType";

const initState = {
  diarydata: null
};

const diaryListReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case DIARYLIST:
      newState.diarydata = action.payload;
      break;
    default:
      break;
  }

  return newState;
};

export default diaryListReducer;
