//for combining the reducers

import {defaultObj} from "./List";
import { combineReducers } from "redux";
const reducers = combineReducers({defaultObj});
export default reducers;