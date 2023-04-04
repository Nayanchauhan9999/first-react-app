import { combineReducers } from "redux"
import changeCounter from "./changeCounter"
import todolistwithredux from "./todolistwithredux"

const allReducersRoot = combineReducers(
    {changeCounter,todolistwithredux}
)

export default allReducersRoot