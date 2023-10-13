import { combineReducers } from "redux";
import { SectionRed } from "./SectionRed";
import { ColumnRed } from "./ColumnRed";
import { SubSectionRed } from "./SubSectionRed";

const rootReducers = combineReducers({
    SectionRed, 
    ColumnRed,
    SubSectionRed,
    });

export default rootReducers