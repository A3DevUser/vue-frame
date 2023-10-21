import { combineReducers } from "redux";
import { SectionRed } from "./SectionRed";
import { ColumnRed } from "./ColumnRed";
import { SubSectionRed } from "./SubSectionRed";
import {NavBarRed}  from "./NavBarRed"
import { FormIdRed,FormDatRed } from "./GeneralStatesRed";
import { GridRed } from "./GridRed";
import { ModalSectionRed } from "./ModalSectionRed";
import { ModalGridRed } from "./ModalGridRed";
import { ModalColumnRed } from "./ModalColumnRed";

const rootReducers = combineReducers({
    SectionRed, 
    ColumnRed,
    SubSectionRed,
    NavBarRed,
    FormIdRed,
    FormDatRed,
    GridRed,
    ModalSectionRed,
    ModalGridRed,
    ModalColumnRed
    });

export default rootReducers