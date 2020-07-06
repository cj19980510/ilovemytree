import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import towishReducer from "./towishReducer";
import detailwishReducer from "./detaillwishReducer";
import diaryReducer from "./diaryReducer";
import wishlistReducer from "./wishlistReducer";
import findfriendReducer from "./findfriendReducer";
import friendwishReducer from "./friendwishReducer";
import wishindexReducer from "./wishindexReducer";
import wishcontentReducer from "./wishcontentReducer";
import espTreeReducer from "./espTreeReducer";
import treeDetailReducer from "./treeDetailReducer";
import diaryListReducer from "./diaryListReducer";
import diaryDetailReducer from "./diaryDetailReducer";
import oldtreeReducer from './oldtreeReducer'
import homeReducer from './homeReducer'
import mineRedecer from './mineReducer'
const rootReducer = combineReducers({
    signinReducer,
    detailwishReducer,
    towishReducer,
    diaryReducer,
    wishlistReducer,
    friendwishReducer,
    findfriendReducer,
    wishindexReducer,
    wishcontentReducer,
    espTreeReducer,
    treeDetailReducer,
    diaryListReducer,
    diaryDetailReducer,
    oldtreeReducer,
    homeReducer,
    mineRedecer
});
export default rootReducer;

