import { combineReducers } from "redux";
import { SectionRed } from "./SectionRed";
import { ColumnRed } from "./ColumnRed";
import { SubSectionRed } from "./SubSectionRed";
import {NavBarRed}  from "./NavBarRed"
import { FormIdRed } from "./GeneralStatesRed";

const rootReducers = combineReducers({
    SectionRed, 
    ColumnRed,
    SubSectionRed,
    NavBarRed,
    FormIdRed
    });

export default rootReducers