import { DIARYDETAIL } from "../action/actionType";

const initState = {
  diarydetaildata: null
};

const diaryDetailReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case DIARYDETAIL:
      newState.diarydetaildata = action.payload;
      break;
    default:
      break;
  }

  return newState;
};

export default diaryDetailReducer;
