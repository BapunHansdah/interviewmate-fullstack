//for combining the reducers

import {GET_PROFILE_DATA} from "./List";
import { combineReducers } from "redux";
const reducers = combineReducers({GET_PROFILE_DATA});
export default reducers;