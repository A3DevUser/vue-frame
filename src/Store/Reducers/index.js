import { combineReducers } from "redux";
import { SectionRed } from "./SectionRed";
import { ColumnRed } from "./ColumnRed";
import { SubSectionRed } from "./SubSectionRed";
import {NavBarRed}  from "./NavBarRed"
import { FormIdRed,FormDatRed } from "./GeneralStatesRed";
import { GridRed } from "./GridRed";
import { ConfSectionRed } from "./ConfSectionRed";
import { ConfColumnRed } from "./ConfColumnRed";
import { ConfGridRed } from "./ConfGridRed";

const rootReducers = combineReducers({
    SectionRed,  
    ColumnRed,
    SubSectionRed,
    NavBarRed,
    FormIdRed,
    FormDatRed,
    GridRed,
    ConfSectionRed,
    ConfColumnRed,
    ConfGridRed
    });

export default rootReducers